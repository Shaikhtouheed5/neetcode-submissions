def first_n_characters(s: str, n: int) -> str:
    lenght= len(s)
    first_n=len(s)-(len(s)-n)
    return s[:first_n]
def last_n_characters(s: str, n: int) -> str:
    lenght= len(s)
    first_n=len(s)-n
    return s[first_n:]


# do not modify below this line
print(first_n_characters("NeetCode", 3))
print(first_n_characters("NeetCode", 4))
print(first_n_characters("NeetCode", 8))

print(last_n_characters("NeetCode", 3))
print(last_n_characters("NeetCode", 4))
print(last_n_characters("NeetCode", 8))
