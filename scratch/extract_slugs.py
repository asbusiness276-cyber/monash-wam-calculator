import re
c = open('src/data/articles.ts', 'r', encoding='utf-8').read()
slugs = re.findall(r'slug:\s*[\'\"\`]+([^\'\"\`]+)', c)
print('\n'.join(slugs))
