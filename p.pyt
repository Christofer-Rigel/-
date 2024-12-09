x = int(input("Please enter a number: "))
y = int(input("Please enter a number: "))
z = input("Please enter one of these: '*', '**', '+', '-', '/', '//': ")

if z == '**':
    result = x ** y
elif z == '+':
    result = x + y
elif z == '-':
    result = x - y
elif z == '/':
    result = x / y
elif z == '*':
    result = x * y
elif z == '//':
    result = x // y
else:
    result = "Invalid operator"

print("Result:", result)
