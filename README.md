## sort-by-keys

Coming from Python, I much enjoyed `sort`'s ability to receive a key to sort a list by.

```python
# sort by property a
mylist.sort(key=lambda x: x.a)
# sort by property a, then property b
mylist.sort(key=lambda x: [x.a, x.b])
# sort by the square of the value, keeping equivalent values in order
sorted([1, -1, 2, -2, 1], key=lambda x: x ** 2)
# [1, -1, 1, 2, -2]
# reverse sort by the square of the value, keeping equivalent values in order
sorted([1, -1, 2, -2, 1], key=lambda x: x ** 2, reverse=True)
# [2, -2, 1, -1, 1]
```

This recreates that functionality, but for JavaScript.

```javascript
// sort by property a
mylist.sort(sortByKey(x => x.a))
// sort by property a, then property b
mylist.sort(sortByKey(x => x.a, x => x.b))
// reverse sort
mylist.sort(reverseSortByKey(x => x ** 2))
```
