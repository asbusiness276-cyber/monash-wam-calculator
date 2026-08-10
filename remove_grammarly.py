import os
import re

path = 'src/components/CalculatorSectionWithInlineAds.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

content = re.sub(r'import GrammarlyAffiliateBanner.*?\n', '', content)
content = re.sub(r'<GrammarlyAffiliateBanner[^>]*/>', '', content)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
