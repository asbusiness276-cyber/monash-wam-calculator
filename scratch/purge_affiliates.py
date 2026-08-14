import os
import re

files_to_delete = [
    "src/components/AmazonStickySidebars.tsx",
    "src/components/AmazonStudentDeals.tsx",
    "src/components/DonationBanner.tsx",
    "src/data/amazonProducts.ts",
    "src/hooks/useAutoRotatingProducts.ts",
    "src/utils/amazonRedirect.ts"
]

for f in files_to_delete:
    if os.path.exists(f):
        os.remove(f)
        print(f"Deleted {f}")

# Bulk replace UniWAMCalculator
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

# Update branding files
branding_replacements = [
    ("UniWAMCalculator.com", "MyCalculatorHub.pro"),
    ("UniWAMCalculator", "My Calculator Hub"),
    ("uniwamcalculator.com", "mycalculatorhub.pro"),
    ("uniwamcalculator", "mycalculatorhub"),
]

files_with_branding = [
    "src/components/Seo.tsx",
    "src/components/home/HomeHero.tsx",
    "src/constants/author.ts",
    "src/constants/social.ts",
    "src/data/articles.ts",
    "src/pages/Articles.tsx",
    "src/pages/ContactUs.tsx",
    "src/utils/ogImageMeta.ts",
    "src/utils/seoBreadcrumbs.ts"
]

for f in files_with_branding:
    replace_in_file(f, branding_replacements)

# Remove affiliate components from other files
# App.tsx
replace_in_file("src/App.tsx", [
    ("import AmazonStickySidebars from './components/AmazonStickySidebars';\n", ""),
    ("<AmazonStickySidebars />", "")
])

# Home.tsx
replace_in_file("src/pages/Home.tsx", [
    ("import DonationBanner from '../components/DonationBanner';\n", ""),
    ("      <div className=\"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8\">\n        <DonationBanner />\n      </div>", "")
])

# ArticlePost.tsx
replace_in_file("src/pages/ArticlePost.tsx", [
    ("import AmazonStudentDeals from '../components/AmazonStudentDeals';\n", ""),
    ("import DonationBanner from '../components/DonationBanner';\n", ""),
    ("              <DonationBanner />", ""),
    ("          <AmazonStudentDeals />", "")
])

# Articles.tsx
replace_in_file("src/pages/Articles.tsx", [
    ("import DonationBanner from '../components/DonationBanner';\n", ""),
    ("          <DonationBanner />", "")
])

# WAMCalculatorPage.tsx
replace_in_file("src/pages/WAMCalculatorPage.tsx", [
    ("import DonationBanner from '../components/DonationBanner';\n", ""),
    ("        <div className=\"max-w-4xl mx-auto mb-12\">\n          <DonationBanner />\n        </div>", "")
])

# PrivacyPolicy.tsx
replace_in_file("src/pages/PrivacyPolicy.tsx", [
    ("approved and enabled, and may include affiliate links", "approved and enabled"),
    ("Affiliate partners may track", "Analytics partners may track"),
    ("If you purchase or sign up through an affiliate link, we may earn a commission at no extra cost to you.", ""),
    ("Affiliate recommendations are optional and never required to use our free calculators.", ""),
    ("are not transmitted to ad or affiliate networks", "are not transmitted to ad networks")
])

# WriteForUs.tsx
replace_in_file("src/pages/WriteForUs.tsx", [
    ("<li>Commercial, affiliate, or SEO-only linking is not accepted.</li>", "<li>Commercial or SEO-only linking is not accepted.</li>")
])

print("Affiliate removal and branding purge script complete.")
