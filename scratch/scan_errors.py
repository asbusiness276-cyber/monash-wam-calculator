import os
import re

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith(('.tsx', '.ts')):
            path = os.path.join(root, file)
            with open(path, 'r', encoding='utf-8') as f:
                lines = f.readlines()
                for i, line in enumerate(lines):
                    # Search for setState( directly not in an arrow function
                    # It's tricky to find, but usually looks like:
                    # setSomething(val) instead of () => setSomething(val)
                    if re.search(r'(?<!=> )(?<!=>)set[A-Z][a-zA-Z0-9]*\(', line):
                        # print(f"Possible direct setter: {path}:{i+1} {line.strip()}")
                        pass
                    
                    # Search for i before init, typically in loops
                    # actually 'i' might be shadowed
                    if 'let i = ' in line and ' i ' in line:
                        pass
