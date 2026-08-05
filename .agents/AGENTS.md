# Workspace Rules & Guidelines for Find Your Calculator

## 1. Calculator Taxonomy & Grouping Rules
Whenever a new calculator is created or added to the project, ALWAYS follow these strict categorization rules:

1. **Domain Assignment**:
   Every new calculator MUST be assigned to its correct domain in `src/data/calculatorCatalog.ts`:
   - `academic`: University WAM, GPA, CGPA, Exam Marks, Unit Weights, ATAR, Honours, Fail Recovery.
   - `finance`: Loan EMI, Interest, Mortgage, Investment/SIP, Tax, Savings.
   - `health`: BMI, BMR, Calories, Body Fat, Ideal Weight, Fitness.
   - `math`: Percentage, Ratios, Fractions, Age, Geometry, Equations.
   - `utility`: Date & Time, Discount, Sales Tax / GST, Unit Converters.

2. **Category Grouping**:
   - Place the calculator link inside the most relevant `CALCULATOR_CATEGORIES` object.
   - If a new niche category is introduced (e.g. `investment-tools` or `fitness-tools`), ensure it has a valid `domainId`, `title`, and `description`.

3. **Routing & Directory Verification**:
   - Add the lazy route in `src/App.tsx`.
   - Ensure the calculator appears in the `/calculators` directory filter tabs.
   - Verify zero broken links and run `npm run typecheck` & `npm run build:no-prerender`.

## 2. Branding & Compliance Rules
- Site Name: **Find Your Calculator** (`findyourcalculator.com`).
- No unauthorized trademarked university logos or names in tool titles. Use generic terms like *University WAM*, *University GPA*, *Australian University*.
