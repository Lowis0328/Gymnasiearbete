import cohere
co = cohere.ClientV2(api_key="VLtoXWY1B8ozbXIV529Cgven7OkunSmWwVSHkgPA")

response = co.chat(

    model="command-r-plus",

    messages=[{"role": "user", "content": "hello world!"}]
)

print(response.message.content[0].text)
