import urllib.parse
import urllib.request
import json
import sys

def papago(voca) :
    client_id = "mQOngzn0qYwWAz6rkyYB"
    client_secret = "aTBM0q47qQ"
    encText = urllib.parse.quote(voca)
    data = "source=ko&target=en&text=" + encText
    url = "https://openapi.naver.com/v1/papago/n2mt"
    request = urllib.request.Request(url)
    request.add_header("X-Naver-Client-Id",client_id)
    request.add_header("X-Naver-Client-Secret",client_secret)
    response = urllib.request.urlopen(request, data=data.encode("utf-8"))
    rescode = response.getcode()
    if(rescode==200):
        response_body = response.read()
        json_result = response_body.decode('utf-8')
        json_dict = json.loads(json_result)
        translated = json_dict['message']['result']['translatedText']
        print(translated)
    else:
        print('Error')
        
def modify_string(s) :
    s = s.lower()
    
    if s.startswith('the '):
        s = s[4:]
    elif s.startswith('a '):
        s = s[2:]
    elif s.startswith('an '):
        s = s[3:]
        
    s = s.replace(' ', '')

    return s