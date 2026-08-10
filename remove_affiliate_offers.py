import os
import re

path = 'src/pages/Articles.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(r'import AffiliateOffers.*?\n', '', content)
content = re.sub(r'<AffiliateOffers[^>]*/>', '', content)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
