# Generated by Django 4.0.5 on 2022-06-08 07:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('patisseriettj', '0003_sucrerie_patisserie_url_viennoiserie_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='patisserie',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=4),
        ),
        migrations.AlterField(
            model_name='sucrerie',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=4),
        ),
        migrations.AlterField(
            model_name='viennoiserie',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=4),
        ),
    ]
