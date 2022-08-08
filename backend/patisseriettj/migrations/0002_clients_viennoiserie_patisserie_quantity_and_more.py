# Generated by Django 4.0.5 on 2022-06-07 10:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('patisseriettj', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Clients',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=60)),
                ('password', models.CharField(max_length=60)),
            ],
        ),
        migrations.CreateModel(
            name='Viennoiserie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=60)),
                ('price', models.IntegerField()),
                ('quantity', models.IntegerField(null=True)),
            ],
        ),
        migrations.AddField(
            model_name='patisserie',
            name='quantity',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='patisserie',
            name='name',
            field=models.CharField(max_length=60),
        ),
    ]