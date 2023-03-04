from django.db import models


# TODO: ASK HOW WE DOING CATEGORY (nour said both, we doing both)
# This class is mainly to give an option to the admin to create another category
class Category(models.Model):
    title = models.CharField(max_length=300)
    slug = models.CharField(max_length=300)
    parent = models.ForeignKey('self', on_delete=models.CASCADE, blank=True, null=True, related_name="children")

    class Meta:
        unique_together = ('slug', 'parent')
        verbose_name_plural = "catgories"

    # https://djangopy.org/how-to/how-to-implement-categories-in-django/
    def __str__(self):
        full_path = [self.title]
        p = self.parent
        while p is not None:
            full_path.append(p.title)
            p = p.parent
        return ' -> '.join(full_path[::-1])


class Klass(models.Model):
    title = models.CharField(max_length=300)

    def __str__(self):
        return self.title


class Series(models.Model):
    title = models.CharField(max_length=300)

    def __str__(self):
        return self.title


class Type(models.Model):
    title = models.CharField(max_length=300)

    def __str__(self):
        return self.title
