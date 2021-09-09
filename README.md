# To search
max length for arabic title/names
iframe, audio player, youtube video attachement 

# TO ASK
author: is the author set by the admin/manager or the one created the article is the author

# Database design
Article/Post (title, author, created_on, updated_on, draft, status,class, series, type, category)
{
    title: charfield(maxlength=500), Nullable=false
    author: chartfiled(maxlength=500), Nullable=false
    upload-date: Datefiled, Nullable=false
    category: Book, Cards..., Nullable=false
    class:   , Nullable=false
    series: series, Nullable=true
    type:   , Nullable=true
}

category = Book, Audio, Video, Pray-cards, Fatawi

- Books( book-type, cover, pdfs, audio )
- fatawi( picture, content, pdf )
- Pray-cards( card-type, picture )
- Audio( mp3, session, album, duration, downloaded, played )
- Video( youtube-link )

- klass(title)
- series(title)

class = القسم (Many to one)
type = صنف ,نوع
series = السلسلة

e.g:
القسم:  قضايا معاصرة
مرض كورونا
وصايا ونصائح


```plantuml
Article <|-- Book, Audio, Video, Pray-cards, Fatawi

article     1  -- 1      Book, Audio, Video, Pray-cards, Fatawi
article 'many' -- 'many' class
article 'many' -- 1      type
article 'many' -- 1      series

```

# Accounts: 

- Admin (permissions=Allow all)
- Manager (permissions=restricted to the articles/site)
- Visitor (permissions=read only)


# Tl;dr:
we can simplify the website to simply `publication management` where each post(article) is considered either
book, Pray-card, fatawi, video or audio.
Article contains title, author, upload-date, category, class, type and series as its fields
* categories can be one of the following: book, Pray-card, fatawi, video or audio each category has 
its own unique fileds
* class is a custom model, class can have many articles and article can have many classes.
* type is a custom model, article can have one type and type can have many articles
* series is a custom model, article can be in one series and series can have many articles


# Creating an new app (TODO: MAKE A BASH SCRIPT TO SIMPLIFY CREATING APP)
When you create an new app(NEW_APP) you must:

1. move it inside apps folder

2. change the name in apps.py of the new created app to where the app is newly located
(e.g: if you move the new app inside backend>apps, the variable `name` in NEW_APP/apps.py must be sth like `backend.apps.APP_NAME`)

3. you should include the new app in INSTALLED_APPS in settings.py (e.g: `backend.apps.NEW_APP.apps.NEW_APPConfig`)

4. create api folder inside ur NEW_APP and add __init__.py, serializers.py, urls.py and `views` folder or python file, depends on complex is gonna be.

5. if you create views folder with multiple views u must import them in your views/__init__.py
and use it as in one view file (to make importing it in urls easy)

*NOTE*: for each new folder you create on your own you must also create __init__.py inside of it
( e.g: NEW_FOLDER/__init__.py )

# File structure


videos: 
الشيخ
القسم
السلسلة

audio:
الشيخ
القسم
السلسلة

books:
الشيخ
القسم
النوع

card:
الشيخ
السلسلة
صنف البطاقة