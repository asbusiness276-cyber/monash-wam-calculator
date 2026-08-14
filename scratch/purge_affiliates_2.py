import os
import re

files_to_delete = [
    "src/components/AmazonResultPopUpModal.tsx",
    "src/components/AmazonCalculatorResultWidget.tsx",
    "src/components/AmazonCtaButton.tsx",
    "src/components/ContextualAmazonAffiliateCard.tsx",
    "src/components/GrammarlyAffiliateBanner.tsx",
    "src/components/StudentOffersBanner.tsx",
    "src/components/AffiliateDisclosure.tsx",
    "src/components/AffiliateOffers.tsx",
    "src/constants/monetization.ts"
]

for f in files_to_delete:
    if os.path.exists(f):
        os.remove(f)
        print(f"Deleted {f}")

# Remove references
def replace_in_file(filepath, replacements):
    if not os.path.exists(filepath): return
    with open(filepath, 'r', encoding='utf-8') as file:
        content = file.read()
        
    new_content = content
    for old, new in replacements:
        new_content = new_content.replace(old, new)
        
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as file:
            file.write(new_content)
        print(f"Updated {filepath}")

replace_in_file("src/components/WAMCalculator.tsx", [
    ("import AmazonResultPopUpModal from './AmazonResultPopUpModal';\n", ""),
    ("      <AmazonResultPopUpModal hasResult={!!result} />", "")
])

replace_in_file("src/components/Footer.tsx", [
    ("As an Amazon Associate, MyCalculatorHub earns from qualifying purchases made \nthrough links on this site.", ""),
    ("As an Amazon Associate, MyCalculatorHub earns from qualifying purchases made through links on this site.", "")
])

print("Part 2 affiliate removal complete.")
