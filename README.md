# csv-analysis
Консольная утилита, которая анализирует переданный файл с информацией о деньгах и выводит на экран некоторую статистику по данным из файла. Файлы хранятся в директории *__fixtures__* в формате CSV.

___

### Запуск программы

Для того, чтобы пользоваться утилитой, вам нужно в корне проекта обратиться к исполняемому файлу *bin\money.js* через команду `money` и перать в качестве аргумента название файла из директории *__fixtures__* следующим образом 

```
money currencies1.csv
```

___

### Результат работы утилиты

Результатом работы утилиты являются пять строк, каждая из которых сообщает определенные данные о переданном в качестве аргумента названии файла.

```
Count: 31
Currency codes: AMD, AUD, AZN, BGN, BRL, BYN, CHF, CZK, DKK, EUR, GBP, HKD, HUF, JPY, KRW, SEK, USD, ZAR
Cost of currency: Min: 0.0595924, Max: 95.8018
Count currency between 10 and 30: 5
Arithmetic mean for USD, EUR, CHF is 75
```

___

### Значение каждой строки 

1. Выводится на экран количество валют в файле. Например,

```
Count: 31
```
2. Выводится список кратких описаний валют, отсортированных в алфавитном порядке
   
```
Count: 31
urrency codes: AMD, AUD, AZN, BGN, BRL, BYN, CHF, CZK, DKK, EUR, GBP, HKD, HUF, JPY, KRW, SEK, USD, ZAR
```

3. Вычисляется в представленном наборе данных минимальное и максимальное значение
   
```
Count: 31
Currency codes: AMD, AUD, AZN, BGN, BRL, BYN, CHF, CZK, DKK, EUR, GBP, HKD, HUF, JPY, KRW, SEK, USD, ZAR
Cost of currency: Min: 0.0595924, Max: 95.8018
```

4. Выводится на экран количество валют, стоимость которых лежит в диапозоне от 10 до 30 (включительно)

```
Count: 31
Cost of currency: Min: 0.0595924, Max: 95.8018
Currency codes: AMD, AUD, AZN, BGN, BRL, BYN, CHF, CZK, DKK, EUR, GBP, HKD, HUF, JPY, KRW, SEK, USD, ZAR
Count currency between 10 and 30: 5
```

5. Расчитывается среднеарифметическое значаение для валют USD, EUR, CHF, при этом округлется в меньшую сторону
   
```
Count: 31
Cost of currency: Min: 0.0595924, Max: 95.8018
Currency codes: AMD, AUD, AZN, BGN, BRL, BYN, CHF, CZK, DKK, EUR, GBP, HKD, HUF, JPY, KRW, SEK, USD, ZAR
Count currency between 10 and 30: 5
Arithmetic mean for USD, EUR, CHF is 56
```