def get_substring(input_string: str, start: int, end: int) -> str:
    the_lenght = len(input_string)
    if(end>the_lenght):
        return ""
    else:
        return (input_string[start:end])



# do not modify below this line
print(get_substring("NeetCode", 1, 7))
print(get_substring("NeetCode", 1, 8))
print(get_substring("NeetCode", 1, 9))
print(get_substring("NeetCode", 0, 2))
print(get_substring("NeetCode", 0, 7))
print(get_substring("NeetCode", 4, 8))
