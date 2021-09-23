# Tl;dr:

---

we can simplify the website to simply `publication management` where each post(article) is considered either

---

- book 
- Pray-card 
- fatawi  
- video 
- audio

---

Article contains title, author, upload-date, category, klass, type and series as its fields

* categories can be one of the following: book, Pray-card, fatawi, video or audio each category has 
its own unique fileds

* klass is a custom model, klass can have many articles and article can have many klasses.

* type is a custom model, article can have one type and type can have many articles

* series is a custom model, article can be in one series and series can have many articles

---

# File structure

Show don't tell

---

# Database design
## Article
```sql
{
    title: charfield(maxlength=500), Nullable=false
    author: chartfiled(maxlength=500), Nullable=false
    upload-date: Datefiled, Nullable=false
    category: Book, Cards..., Nullable=false
    Klass:  Klass , Nullable=false
    series: series, Nullable=true
    type:  type , Nullable=true
}
```
---

## Category
```sql
{
    title: charfield(maxlength=500), Nullable=false
    slug: models.CharField(max_length=300)
    parent: models.ForeignKey('self', on_delete=models.CASCADE, blank=True, null=True, related_name="children")
}
```

---

- Books( {...article}, book-type, cover, pdfs, audio )
- fatawi( {...article}, picture, content, pdf )
- Pray-cards( {...article}, card-type, picture )
- Audio( {...article}, mp3, session, album, duration, downloaded, played )
- Video( {...article}, youtube-link )
- klass(title)
- series(title)

---

# Creating an new app 
<!-- (TODO: MAKE A BASH SCRIPT TO SIMPLIFY CREATING APP) -->
When you create an new app(NEW_APP) you must:

---

1. move it inside apps folder

---

2. change the name in apps.py of the new created app to where the app is newly located
(e.g: if you move the new app inside backend>apps, the variable `name` in NEW_APP/apps.py must be sth like `backend.apps.APP_NAME`)

---

3. you should include the new app in INSTALLED_APPS in settings.py (e.g: `backend.apps.NEW_APP.apps.NEW_APPConfig`)

---

4. create api folder inside ur NEW_APP and add __init__.py, serializers.py, urls.py and `views` folder or python file, depends on complex is gonna be.

---

5. if you create views folder with multiple views u must import them in your views/__init__.py
and use it as in one view file (to make importing it in urls easy)

---

*NOTE*: for each new folder you create on your own you must also create __init__.py inside of it
( e.g: NEW_FOLDER/__init__.py )

---

# Common Errors:

1. ## Makemigrations is mad!: 

if django asks you to set a default value to some field when you try to makemigration after some 
changes on models you have to delete migartions folder and drop the table of that changed model.
What causing this issue is django needs to add your new changes/fields to already created table in database and it has to set a value to those new added fields you can avoid that by adding `default=` attribute to you new fields.

---

# Must run commands:
> python3 manage.py collectstatic


---

# Accounts(TODO): 
- Admin (permissions=Allow all)
- Manager (permissions=restricted to the articles/site)
- Visitor (permissions=read only)
