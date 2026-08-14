export interface GuideTable {
  headers: string[];
  rows: string[][];
}

export interface GuideCallout {
  variant: 'info' | 'warning' | 'tip';
  title?: string;
  text: string;
}

export interface GuideExample {
  title: string;
  paragraphs: string[];
  table?: GuideTable;
}

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  steps?: string[];
  examples?: GuideExample[];
  table?: GuideTable;
  callouts?: GuideCallout[];
}

export interface CalculatorPageGuideData {
  sections: GuideSection[];
}

import { CALCULATOR_GUIDE_EXPANSIONS_PART1 } from './calculatorGuideExpansionsPart1';
import { CALCULATOR_GUIDE_EXPANSIONS_PART2 } from './calculatorGuideExpansionsPart2';
import { CALCULATOR_GUIDE_EXPANSIONS_PART3 } from './calculatorGuideExpansionsPart3';
import { CALCULATOR_GUIDE_EXPANSIONS_PART4 } from './calculatorGuideExpansionsPart4';

const EXPANDED_GUIDES: Record<string, CalculatorPageGuideData> = {
  ...CALCULATOR_GUIDE_EXPANSIONS_PART1,
  ...CALCULATOR_GUIDE_EXPANSIONS_PART2,
  ...CALCULATOR_GUIDE_EXPANSIONS_PART3,
  ...CALCULATOR_GUIDE_EXPANSIONS_PART4,
  '/student-budget-calculator': {
    sections: [
      {
        heading: 'How to use the Student Budget Calculator',
        paragraphs: [
          'Choose whether you want to budget weekly or monthly.',
          'Add all your income sources, such as your part-time job, allowances, or scholarships.',
          'Add your expenses, like rent, groceries, transportation, and entertainment.',
          'Check your net balance to see if you are saving money or spending more than you earn!'
        ]
      }
    ]
  },
  '/study-time-calculator': {
    sections: [
      {
        heading: 'How to use the Study Time Calculator',
        paragraphs: [
          'Enter your total credit points for the semester (e.g., 24 for a standard full-time load).',
          'The calculator will estimate your total recommended weekly workload.',
          'See the breakdown between contact hours (classes, lectures) and self-directed study hours so you can plan your schedule.'
        ]
      }
    ]
  },
  '/attendance-calculator': {
    sections: [
      {
        heading: 'How to use the Attendance Calculator',
        paragraphs: [
          'Enter the total number of classes in the semester.',
          'Enter how many classes you have missed so far.',
          'The calculator will tell you if you can afford to skip any more classes while staying above the 75% or 80% hurdle.'
        ]
      }
    ]
  },
  '/essay-word-count-allocator': {
    sections: [
      {
        heading: 'How to use the Essay Word Count Allocator',
        paragraphs: [
          'Enter your total required word count.',
          'Adjust the percentages for your introduction and conclusion (typically 10% each).',
          'The tool will split your total words into introduction, body paragraphs, and conclusion blocks.'
        ]
      }
    ]
  },
  '/reading-time-calculator': {
    sections: [
      {
        heading: 'How to use the Reading Time Calculator',
        paragraphs: [
          'Enter the word count of your reading material.',
          'Select your estimated reading speed (default is 200 words per minute for average readers).',
          'See how many hours and minutes you need to set aside to finish the text.'
        ]
      }
    ]
  },
  '/pomodoro-study-timer': {
    sections: [
      {
        heading: 'How to use the Pomodoro Study Timer',
        paragraphs: [
          'Click Start to begin a 25-minute study session without distractions.',
          'When the timer ends, take a 5-minute break by clicking the Break button.',
          'Repeat this cycle to maximize productivity without feeling burnt out.'
        ]
      }
    ]
  },
  '/typing-time-estimator': {
    sections: [
      {
        heading: 'How to use the Typing Time Estimator',
        paragraphs: [
          'Enter your essay word count.',
          'Select your typing speed (Words Per Minute).',
          'The tool will output the absolute minimum time required to physically hit the keys to write the essay.'
        ]
      }
    ]
  },
  '/words-to-pages-converter': {
    sections: [
      {
        heading: 'How to use the Words to Pages Converter',
        paragraphs: [
          'Enter your total word count (e.g. 2000 words).',
          'Select your line spacing (single or double) and font type.',
          'The tool will output the approximate number of physical pages your essay will take up.'
        ]
      }
    ]
  },
  '/hecs-repayment-time-calculator': {
    sections: [
      {
        heading: 'How to use the HECS Debt Payoff Time Calculator',
        paragraphs: [
          'Enter your total HELP/HECS debt amount.',
          'Enter your expected graduate salary to determine your ATO repayment bracket.',
          'The tool calculates how many years it will take to clear the debt, considering annual indexation.'
        ]
      }
    ]
  },
  '/sharehouse-rent-splitter': {
    sections: [
      {
        heading: 'How to use the Sharehouse Rent Splitter',
        paragraphs: [
          'Enter the total weekly rent for the house.',
          'Add a roommate for each bedroom, entering their room size in square meters.',
          'Tick the box if their room has a private ensuite.',
          'The calculator will distribute 40% of the rent equally (for common areas) and 60% proportionally based on room size.'
        ]
      }
    ]
  },
  '/peer-review-mark-calculator': {
    sections: [
      {
        heading: 'How to use the Group Assignment Peer Mark Calculator',
        paragraphs: [
          'Enter the overall mark that your group received for the assignment.',
          'Enter your specific peer evaluation factor (e.g. SPARKPLUS multiplier like 0.8 or 1.1).',
          'Your final individual grade will be calculated (capped at 100%).'
        ]
      }
    ]
  },
  '/caffeine-crash-calculator': {
    sections: [
      {
        heading: 'How to use the Caffeine Crash Calculator',
        paragraphs: [
          'Enter the amount of caffeine you consumed in milligrams.',
          'Enter the time of day you consumed it.',
          'The tool uses the standard 5-hour half-life of caffeine to estimate when it will drop to sleep-safe levels.'
        ]
      }
    ]
  },
  '/student-tax-calculator': {
    sections: [
      {
        heading: 'How to use the Student Tax Calculator',
        paragraphs: [
          'Enter your estimated total gross income for the financial year.',
          'The calculator will tell you if you are under the $18,200 tax-free threshold.',
          'If you earn over the threshold, it will estimate your income tax and Medicare levy based on the latest ATO rates.'
        ]
      }
    ]
  },
  '/youth-allowance-estimator': {
    sections: [
      {
        heading: 'How to use the Youth Allowance Estimator',
        paragraphs: [
          'Enter your age and select whether you are considered independent by Centrelink.',
          'Select whether you live at the parental home or away from home.',
          'The tool will output the maximum base fortnightly rate you may be eligible for. Note that income and asset tests apply.'
        ]
      }
    ]
  },
  '/commute-vs-rent-calculator': {
    sections: [
      {
        heading: 'How to use the Commute vs Rent Calculator',
        paragraphs: [
          'Enter the weekly rent for a place close to campus, and a place further away.',
          'Enter your daily transport costs (e.g. Myki cap) and how many hours you spend commuting each day.',
          'The tool compares the total financial cost and reveals the "hidden" cost of your lost time.'
        ]
      }
    ]
  },
  '/standard-drinks-calculator': {
    sections: [
      {
        heading: 'How to use the Standard Drinks Calculator',
        paragraphs: [
          'Enter the volume of your drink in millilitres (e.g., 375mL for a can).',
          'Enter the Alcohol by Volume percentage (e.g., 4.8%).',
          'The tool applies the Australian formula (Volume x ABV x 0.789) to tell you exactly how many standard drinks you are consuming.'
        ]
      }
    ]
  },
  '/detailed-text-analyzer': {
    sections: [
      {
        heading: 'How to use the Text & Speech Analyzer',
        paragraphs: [
          'Paste your essay, speech, or presentation script into the text box.',
          'The tool will instantly count your words, characters, sentences, and paragraphs.',
          'It also accurately estimates how long it will take to present the speech out loud based on an average speaking speed of 140 words per minute.'
        ]
      }
    ]
  },
  '/lecture-speed-calculator': {
    sections: [
      {
        heading: 'How to use the Lecture Speed Calculator',
        paragraphs: [
          'Enter the total hours and minutes of your lecture video.',
          'Select your desired playback speed (e.g., 1.25x, 1.5x, 2x).',
          'The tool will output exactly how much real time it will take you to watch the video, and how many minutes you save.'
        ]
      }
    ]
  },
  '/sleep-cycle-calculator': {
    sections: [
      {
        heading: 'How to use the Sleep Cycle Calculator',
        paragraphs: [
          'Enter the exact time your alarm is set to go off in the morning.',
          'The tool works backwards in 90-minute REM sleep cycle increments.',
          'It will provide several exact times you should try to fall asleep (with a 15-minute buffer built in) to wake up feeling completely refreshed.'
        ]
      }
    ]
  },
  '/textbook-reading-time-calculator': {
    sections: [
      {
        heading: 'How to use the Textbook Reading Time Calculator',
        paragraphs: [
          'Enter the total number of pages you need to read for your homework or chapter.',
          'Select your average reading pace based on the density of the material.',
          'The tool will output the total number of study hours you should block out in your calendar to finish the reading.'
        ]
      }
    ]
  },
  '/text-case-converter': {
    sections: [
      {
        heading: 'How to use the Text Case Converter',
        paragraphs: [
          'Paste any string of text into the large text box.',
          'Click the buttons above to instantly convert the entire text to UPPERCASE, lowercase, Sentence case, or Title Case.',
          'Use the "Copy to Clipboard" button to instantly copy the correctly formatted text.'
        ]
      }
    ]
  },
  '/daily-coffee-cost-calculator': {
    sections: [
      {
        heading: 'How to use the Daily Coffee Cost Calculator',
        paragraphs: [
          'Enter the price you pay for your daily coffee, energy drink, or treat.',
          'Enter how many times per week you make this purchase.',
          'The tool will calculate your weekly, monthly, and yearly expenditure. It will also show you how much that money would grow to if invested over 10 years at a 5% return.'
        ]
      }
    ]
  },
  '/hecs-indexation-calculator': {
    sections: [
      {
        heading: 'How to use the HECS Indexation Calculator',
        paragraphs: [
          'Enter your current HECS/HELP debt balance.',
          'Enter the estimated or actual CPI indexation rate (usually announced in May).',
          'The tool will instantly show you exactly how much debt will be added to your balance overnight on June 1st.'
        ]
      }
    ]
  },
  '/alphabetizer': {
    sections: [
      {
        heading: 'How to use the Alphabetizer',
        paragraphs: [
          'Paste your unsorted list of references, names, or words into the large text area.',
          'Make sure each item is on its own line.',
          'Click the "Sort A-Z" or "Sort Z-A" button. The tool will automatically remove empty lines and alphabetize the entire list for you instantly.'
        ]
      }
    ]
  },
  '/days-between-dates-calculator': {
    sections: [
      {
        heading: 'How to use the Days Between Dates Calculator',
        paragraphs: [
          'Select your starting date (this defaults to today).',
          'Select your target end date (e.g., your exam date or assignment deadline).',
          'The tool calculates the exact number of days between the two dates (not including the final day itself), and breaks it down into weeks and months.'
        ]
      }
    ]
  },
  '/percentage-calculator': {
    sections: [
      {
        heading: 'How to use the Percentage Calculator',
        paragraphs: [
          'Use the first row to calculate a specific percentage of a number (e.g., what is 20% of 150).',
          'Use the second row to find out what percentage one number is of another (e.g., 30 is what percent of 150).',
          'Use the third row to calculate the percentage increase or decrease between two numbers over time.'
        ]
      }
    ]
  },
  '/binary-to-text-converter': {
    sections: [
      {
        heading: 'How to use the Binary to Text Converter',
        paragraphs: [
          'Select your mode: "Text to Binary" or "Binary to Text".',
          'Paste your input into the top text box.',
          'The translated output will instantly appear in the bottom box, formatted correctly using standard ASCII 8-bit encoding.'
        ]
      }
    ]
  },
  '/age-calculator': {
    sections: [
      {
        heading: 'How to use the Age Calculator',
        paragraphs: [
          'Select your exact Date of Birth from the calendar.',
          'The target date automatically defaults to today, but you can change it to any future or past date.',
          'The tool will instantly show you exactly how many years, months, and days old you are.'
        ]
      }
    ]
  },
  '/random-number-generator': {
    sections: [
      {
        heading: 'How to use the Random Number Generator',
        paragraphs: [
          'Set the minimum and maximum boundaries for your numbers.',
          'Choose how many random numbers you want to generate (up to 1,000 at once).',
          'Select whether you want to allow duplicate numbers or if every number must be unique, and hit Generate.'
        ]
      }
    ]
  },
  '/number-to-words-converter': {
    sections: [
      {
        heading: 'How to use the Number to Words Converter',
        paragraphs: [
          'Type any whole number into the text box (e.g., 1234).',
          'The tool will instantly translate the digits into written English text (e.g., One Thousand Two Hundred Thirty Four).',
          'Click the copy button to instantly paste it into your essay, legal document, or cheque.'
        ]
      }
    ]
  },
  '/study-break-calculator': {
    sections: [
      {
        heading: 'How to use the Study Break Calculator',
        paragraphs: [
          'Enter the total amount of time you have available to study today.',
          'Select a Focus Strategy. Pomodoro uses 25-minute sprints. DeskTime uses 52-minute blocks. Ultradian uses deep 90-minute focuses.',
          'The calculator will break your total time into an optimized schedule of study blocks and recovery breaks so you don\'t burn out.'
        ]
      }
    ]
  },
  '/hex-to-decimal-converter': {
    sections: [
      {
        heading: 'How to use the Hex to Decimal Converter',
        paragraphs: [
          'If you have a Hex value (like 1A3F), type it into the Hexadecimal box. The Decimal value will automatically appear.',
          'If you have a Decimal value (like 6719), type it into the Decimal box to find its Base-16 Hex equivalent.',
          'The tool will validate your input in real-time to ensure it only contains valid characters.'
        ]
      }
    ]
  },
  '/bmi-calculator': {
    sections: [
      { heading: 'How to use', paragraphs: ['Enter your height and weight to calculate your BMI and determine your health category.'] }
    ]
  },
  '/tip-calculator': {
    sections: [
      { heading: 'How to use', paragraphs: ['Enter the total bill and your desired tip percentage. You can also split the total amount across multiple people.'] }
    ]
  },
  '/salary-calculator': {
    sections: [
      { heading: 'How to use', paragraphs: ['Enter your annual salary to instantly see how much you make per hour, per day, per week, and per month.'] }
    ]
  },
  '/discount-calculator': {
    sections: [
      { heading: 'How to use', paragraphs: ['Enter the original price and the discount percentage to find out exactly how much you will save and the final price to pay.'] }
    ]
  },
  '/loan-calculator': {
    sections: [
      { heading: 'How to use', paragraphs: ['Enter your loan amount, interest rate, and the number of years to calculate your monthly EMI repayments and total interest costs.'] }
    ]
  },
  '/compound-interest-calculator': {
    sections: [
      { heading: 'How to use', paragraphs: ['Enter your starting balance, monthly contributions, and estimated interest rate to see how your money grows over time.'] }
    ]
  },
  '/margin-calculator': {
    sections: [
      { heading: 'How to use', paragraphs: ['Enter the cost of an item and its selling price to instantly calculate your gross profit and profit margin percentage.'] }
    ]
  },
  '/word-counter-tool': {
    sections: [
      { heading: 'How to use', paragraphs: ['Paste your text into the box to instantly see a live count of words, characters, and sentences.'] }
    ]
  },
  '/roman-numeral-converter': {
    sections: [
      { heading: 'How to use', paragraphs: ['Type a standard number to convert it to Roman Numerals, or type a Roman Numeral to find out its value in digits.'] }
    ]
  },
  '/password-generator': {
    sections: [
      { heading: 'How to use', paragraphs: ['Choose your desired password length and character types, then hit generate to create a completely random, secure password.'] }
    ]
  }
};

export const CALCULATOR_PAGE_GUIDES: Record<string, CalculatorPageGuideData> = {
  '/atar-course-checker': {
    sections: [
      {
        heading: 'How to use the ATAR Course Checker',
        paragraphs: [
          'This tool helps Victorian high school students map their expected or final ATAR to the university undergraduate degrees.',
          'Simply enter your ATAR and the tool will highlight courses where you meet or exceed the published ATAR cut-off.',
          'If you are eligible for the Special Entry Access Scheme (SEAS) through VTAC, check the SEAS box to see the lowered ATAR requirements for eligible students.'
        ]
      }
    ]
  },
  '/failed-unit-wam-calculator': {
    sections: [
      {
        heading: 'Why Failed Units Matter for WAM',
        paragraphs: [
          'At the university, failed units normally remain in your WAM calculation under standard coursework rules. A fail drags your weighted average down in proportion to the unit\'s credit points — a 12-credit fail hurts twice as much as a 6-credit fail at the same mark.',
          'This calculator shows how your WAM would change if the failed unit mark stayed the same, improved through a supplementary pass (capped at 50%), or recovered to credit or distinction levels. It helps you understand recovery options before speaking with faculty advisers.',
        ],
      },
      {
        heading: 'Supplementary Pass vs Higher Recovery',
        paragraphs: [
          'A supplementary assessment passed at 50% replaces the fail mark in WAM maths for planning purposes, lifting your average compared to keeping a mark in the 40s. Recovering to 65% or 75% moves WAM further, but may require repeating the unit or other faculty pathways — not only a supp exam.',
          'For a full comparison between supplementary pass and repeating the unit (where both attempts may count), use the supp vs repeat WAM calculator alongside this tool.',
        ],
        table: {
          headers: ['Scenario', 'Typical mark', 'WAM effect'],
          rows: [
            ['Keep fail', '0–49%', 'Lowest WAM — fail stays on record'],
            ['Supplementary pass', '50% (capped)', 'Moderate recovery'],
            ['Credit recovery', '65%', 'Stronger lift if permitted'],
            ['Distinction recovery', '75%+', 'Best WAM outcome if achievable'],
          ],
        },
      },
      {
        heading: 'Recovery Planning Tips',
        bullets: [
          'Enter WAM with the fail already included — match your WES snapshot.',
          'Prioritise high-credit units where future distinction marks can offset the fail.',
          'Speak with Uni Connect or your faculty about supp eligibility and repeat rules.',
          'Track progress each semester with the WAM projection calculator.',
        ],
        paragraphs: [
          'One failed unit rarely ends honours or scholarship hopes if enough credit points remain. The key is knowing the maths early and choosing the recovery path that fits your timetable and faculty policy.',
        ],
      },
    ],
  },
  '/supp-repeat-wam-calculator': {
    sections: [
      {
        heading: 'Supplementary vs Repeat at Uni',
        paragraphs: [
          'When you fail a unit, Uni may offer a supplementary assessment. Passing at 50% replaces the fail mark in WAM for that unit without adding extra credit points. Repeating the unit adds a second attempt — and under normal rules both the fail and repeat marks can count toward WAM, increasing total credit points.',
          'This calculator compares WAM after a supplementary pass at 50 versus WAM after a repeat attempt at a mark you choose. It also estimates the repeat mark needed to beat the supplementary outcome.',
        ],
      },
      {
        heading: 'Which Path Is Better?',
        paragraphs: [
          'A supplementary pass is often better for WAM when you only need 50 and want to avoid carrying two attempts. A repeat can beat supp if you can score well above the breakeven mark — especially on high-credit units where a distinction repeat outweighs a capped 50.',
          'Timetable, progression rules, and faculty advice matter as much as maths. You cannot repeat during an exchange semester if it clashes with approved travel, for example.',
        ],
        bullets: [
          'Enter current WAM with the fail already included.',
          'Check supp eligibility on official Uni channels.',
          'Read our supplementary exam WAM guide and repeat unit guide.',
        ],
      },
    ],
  },
  '/wam-projection-calculator': {
    sections: [
      {
        heading: 'What-If WAM Projection',
        paragraphs: [
          'The WAM projection calculator models how upcoming units — with estimated marks — will change your cumulative WAM. Enter your confirmed WAM and completed credit points, then add planned units with expected marks and credit values.',
          'Use conservative and optimistic scenarios before enrolment decisions. A semester of distinction marks lifts WAM slowly if you already have 150+ credit points behind you; the same marks matter more early in your degree.',
        ],
      },
      {
        heading: 'Planning Scenarios',
        bullets: [
          'Model HD-heavy vs credit-level outcomes before census date.',
          'See whether one weak 12-credit unit disproportionately drags projection.',
          'Compare projection results with WAM target goals for honours or scholarships.',
        ],
        paragraphs: [
          'Label estimated marks clearly — only confirmed transcript marks belong in official planning documents. Update projections after every results release. For a full walkthrough with worked examples, read the WAM projection guide.',
        ],
      },
    ],
  },
  '/unit-mark-calculator': {
    sections: [
      {
        heading: 'Weighted Unit Mark Calculator',
        paragraphs: [
          'Most Uni units split assessment across tasks — assignments, tests, participation, exams — each with a weight totalling 100%. This calculator computes your current unit mark from weighted components before the final exam.',
          'Enter each assessment mark and its weight percentage. Weights must sum to 100% for a valid result. Use the output with the final grade calculator to see what exam mark you need for HD, D, or pass targets.',
        ],
      },
      {
        heading: 'Example',
        paragraphs: [
          'Assignment 80% at weight 30%, mid-semester test 65% at weight 20%, participation 100% at weight 10% → weighted mark = 80×0.30 + 65×0.20 + 100×0.10 = 51%. With 40% exam weight remaining, you need a higher exam score to reach distinction overall.',
        ],
      },
    ],
  },
  '/unit-target-calculator': {
    sections: [
      {
        heading: 'Target Mark on Remaining Assessments',
        paragraphs: [
          'Unlike the final grade calculator (coursework vs one exam), this tool handles multiple remaining assessments with individual weights. Enter marks and weights for completed tasks, then set a target overall unit percentage.',
          'The calculator solves for the minimum average required on remaining assessment weight — useful when several tasks are still open in the same unit.',
        ],
      },
      {
        heading: 'When to Use Unit Target vs Final Grade',
        bullets: [
          'Unit target: several remaining tasks with different weights.',
          'Final grade: simple coursework % + final exam % split.',
          'Unit mark calculator: current standing from all released tasks.',
        ],
        paragraphs: [
          'Read our final exam mark calculator guide for exam-heavy units and faculty hurdle rules.',
        ],
      },
    ],
  },
  '/mark-to-grade-calculator': {
    sections: [
      {
        heading: 'Uni Percentage to Letter Grade',
        paragraphs: [
          'Uni standard coursework bands: HD 80–100, D 70–79, C 60–69, P 50–59, N below 50. Boundary marks matter — 79% is Distinction while 80% is High Distinction. One percentage point can change scholarship eligibility perceptions and employer screening.',
          'This tool converts a single mark instantly. For cumulative performance across your degree, use the WAM calculator.',
        ],
      },
      {
        heading: 'GPA Band Reference',
        paragraphs: [
          'Each letter grade maps to an official Uni GPA value on the 4.0 scale. HD = 4.0, D = 3.0, C = 2.0, P = 1.0, N = 0.3. Use the Uni GPA calculator for multi-unit cumulative GPA.',
        ],
      },
    ],
  },
  '/wam-to-gpa-calculator': {
    sections: [
      {
        heading: 'Converting WAM to GPA',
        paragraphs: [
          'Uni reports WAM as a percentage (0–100). Many scholarship bodies, visa forms, and overseas universities request GPA on a 4.0 or 7.0 scale instead. This converter maps your WAM to Uni grade bands and estimated GPA values for planning.',
          'Conversion is approximate — official GPA on your transcript uses letter-grade maths per unit, not a single WAM snapshot. Two students with the same WAM can have slightly different GPA if their marks cluster differently inside bands.',
        ],
      },
      {
        heading: 'Which Scale to Report',
        bullets: [
          'Use 4.0 when US-style forms or Uni official GPA are requested.',
          'Use 7.0 when Australian HDR or some international schemas ask for it.',
          'Lead with WAM when the form allows — it is Uni native metric.',
        ],
        paragraphs: [
          'Read our WAM vs GPA postgraduate guide when coursework applications ask which metric to emphasise.',
        ],
      },
    ],
  },
  '/gpa-to-wam-calculator': {
    sections: [
      {
        heading: 'GPA to WAM Estimation',
        paragraphs: [
          'Converting GPA back to WAM produces a range, not one exact number, because grade bands span several percentage points. A GPA of 3.0 on the 4.0 scale maps to roughly 70–79% WAM at Uni — the Distinction band.',
          'Use this when transferring from another institution, comparing scholarship cut-offs, or estimating Uni-equivalent standing from a host university GPA.',
        ],
      },
      {
        heading: 'Limitations',
        bullets: [
          'Cross-university GPA scales differ — always note source institution.',
          'Ranges are more honest than false-precision single values.',
          'Verify with official WAM once you have transcript marks.',
        ],
        paragraphs: [
          'After estimating, enter real unit marks in the WAM calculator for accurate cumulative results.',
        ],
      },
    ],
  },
  '/final-grade-calculator': {
    sections: [
      {
        heading: 'Final Exam Mark Formula',
        paragraphs: [
          'Required exam mark = (target overall − coursework mark × coursework weight) ÷ exam weight. Weights are decimals summing to 1 (e.g. 60% coursework = 0.60). A negative result means your target is already secured from coursework; above 100% means the target is not achievable without adjustment.',
          'Always confirm assessment weights in the unit guide — some units include hurdle tasks or non-standard splits.',
        ],
      },
      {
        heading: 'Study Planning with Targets',
        bullets: [
          'Run scenarios for pass (50), credit (65), distinction (75), and HD (85).',
          'Update after each released assessment mark.',
          'Discuss impossible targets early with your unit coordinator.',
        ],
        paragraphs: [
          'Semester-wide results feed your WAM. Use the WAM target calculator to connect unit goals with degree-level averages.',
        ],
      },
    ],
  },
  '/semester-wam-calculator': {
    sections: [
      {
        heading: 'Semester vs Degree WAM',
        paragraphs: [
          'Semester WAM measures one teaching period only. Degree WAM on your transcript includes every completed unit with Uni year-level weighting (Year 1 at 0.5). A single strong semester lifts cumulative WAM gradually when many credit points already count toward your average.',
          'Use semester WAM after results to review how the current period went. Use the main WAM calculator for official-style cumulative tracking.',
        ],
      },
      {
        heading: 'Credit Weighting Reminder',
        paragraphs: [
          'Never simple-average unit percentages when credit points differ. A 12-credit unit at 85% and a 6-credit unit at 70% yield weighted average 80%, not 77.5%. This calculator applies credit weighting automatically.',
        ],
      },
    ],
  },
  '/wam-target-calculator': {
    sections: [
      {
        heading: 'Credit-Weighted Target Maths',
        paragraphs: [
          'Required average on remaining units = (target WAM × total cp − current WAM × completed cp) ÷ remaining cp. High-credit future units move this average more than low-credit electives when they complete.',
          'If the result exceeds 100%, the target is unreachable with that remaining load unless you add more credit-bearing performance later or adjust the goal.',
        ],
      },
      {
        heading: 'Common Uni Goals',
        table: {
          headers: ['Goal', 'WAM band', 'Notes'],
          rows: [
            ['Distinction average', '70+', 'Merit baseline'],
            ['Competitive honours', '75–80+', 'Faculty-specific'],
            ['High distinction positioning', '80+', 'Strong scholarship / awards'],
          ],
        },
        paragraphs: [
          'Pair with distinction average and scholarship WAM calculators for layered planning. Read what is a good WAM for benchmark context.',
        ],
      },
    ],
  },
  '/pass-mark-calculator': {
    sections: [
      {
        heading: 'Minimum Mark to Pass at Uni',
        paragraphs: [
          'A Pass (P) on standard Uni coursework requires 50% overall unless a unit specifies hurdles. This calculator solves for the final exam percentage needed when coursework is already complete.',
          'Formula: required exam = (50 − coursework × coursework weight) ÷ exam weight. Weights are percentages that should total 100% for typical units.',
        ],
      },
      {
        heading: 'Pass vs Higher Targets',
        paragraphs: [
          'Use the final grade calculator when aiming for credit (60+), distinction (70+), or HD (80+). This pass-only tool answers the most common anxiety question before exams: what is the minimum to pass?',
        ],
        bullets: [
          'Negative result = already at 50%+ from coursework alone.',
          'Above 100% = pass not achievable — contact your coordinator.',
          'Check unit guide for exam hurdles separate from overall 50%.',
        ],
      },
    ],
  },
  '/degree-progress-calculator': {
    sections: [
      {
        heading: 'Credit Points and Degree Completion',
        paragraphs: [
          'Uni bachelor degrees are measured in credit points (cp). Most courses require 192 cp. Double degrees and graduate-entry pathways differ — confirm your handbook total.',
          'Completed cp includes passed Uni-graded units and approved exchange SFR credit. In-progress units count only after results are final on WES.',
        ],
      },
      {
        heading: 'Planning with WAM',
        paragraphs: [
          'Degree progress and WAM are separate metrics. You can be 75% complete with a WAM of 68 or 90% complete with a WAM of 72. Use the WAM target calculator on remaining cp to plan academic goals for your final semesters.',
        ],
        table: {
          headers: ['Typical load', 'Credit points', 'Notes'],
          rows: [
            ['Standard full-time semester', '24 cp', '4 × 6 cp units common'],
            ['Light load', '18 cp', 'Part-time or reduced study'],
            ['Summer / intensive', '6–12 cp', 'Faculty rules vary'],
          ],
        },
      },
    ],
  },
  '/wam-milestones-calculator': {
    sections: [
      {
        heading: 'What Are WAM Milestones?',
        paragraphs: [
          'WAM milestones are practical planning bands students use to understand academic standing. They are not all official cutoffs, but they help translate one WAM number into common goals: pass progression, exchange readiness, distinction average, high distinction, and top merit positioning.',
          'This checker is deliberately broad. Use specialised tools for exact planning: WAM target for one target, scholarship WAM for merit tiers, and distinction average for the WAM 70 / GPA 3.0 benchmark.',
        ],
      },
      {
        heading: 'How to Use Remaining Credit Points',
        paragraphs: [
          'If you enter completed and remaining credit points, the calculator estimates the average needed on all remaining units to reach each milestone. This is useful before final-year enrolment or when deciding whether a target is realistic.',
        ],
        table: {
          headers: ['Milestone', 'Typical planning meaning', 'Related tool'],
          rows: [
            ['50 WAM', 'Pass / progression floor', 'Final grade and pass mark calculators'],
            ['60 WAM', 'Exchange or standing planning floor', 'Exchange WAM calculator'],
            ['70 WAM', 'Distinction average', 'Distinction average calculator'],
            ['80+ WAM', 'High distinction territory', 'Scholarship and dean\'s honours calculators'],
          ],
        },
      },
    ],
  },
  '/withdrawn-fail-impact-calculator': {
    sections: [
      {
        heading: 'WN vs Standard Fail at Uni',
        paragraphs: [
          'On the Uni 4.0 GPA scale, a standard fail (N or NH) has GPA value 0.3, while withdrawn fail (WN) has GPA value 0.0. That difference matters when GPA or CGPA is used for forms, international reporting, or internal progress checks.',
          'WAM treatment is more nuanced because Uni publishes exclusion rules for certain result codes. Instead of guessing, this tool shows a confirmed GPA scenario plus WAM excluded and worst-case counted-as-zero scenarios.',
        ],
      },
      {
        heading: 'How to Read the Result',
        bullets: [
          'GPA after WN assumes the WN unit contributes 0.0 grade points.',
          'Standard fail comparison shows how much harsher WN is than N on GPA.',
          'WAM excluded means your WAM stays unchanged if WN is excluded from WAM maths.',
          'Worst-case WAM counts a 0 mark, useful for conservative planning only.',
        ],
        paragraphs: [
          'Always check your WES record or ask your faculty before making enrolment or appeal decisions. Calculator outputs are planning estimates, not official academic advice.',
        ],
      },
    ],
  },
  '/weighted-average-calculator': {
    sections: [
      {
        heading: 'Credit-Weighted Average',
        paragraphs: [
          'A weighted average multiplies each mark by its credit points before dividing by total credit. This matches how WAM planning works when all units count equally by level weighting.',
          'Enter unit marks and credit points for the set you want to average — one semester, a year, or any group of completed units.',
        ],
      },
      {
        heading: 'When to Use This Tool',
        bullets: [
          'Compare 6 cp vs 12 cp impact before results release.',
          'Check semester performance with credit weighting.',
          'Pair with the grade average calculator to see simple vs weighted means.',
        ],
        paragraphs: [
          'For cumulative degree WAM with Year 1 half-weighting, use the main WAM calculator on the homepage.',
        ],
      },
      {
        heading: 'Formula Reminder',
        paragraphs: [
          'Credit-weighted average = Σ(mark × credit points) ÷ Σ(credit points). A 75 in a 12 cp unit contributes 900 weighted points; the same 75 in a 6 cp unit contributes 450. That is why students with identical simple means can have different official WAM when their credit loads differ.',
          'Semester-only groups exclude prior years — useful when reviewing one teaching period before full degree weighting applies. Export unit marks from WES or Moodle to populate the calculator accurately.',
        ],
      },
    ],
  },
  '/grade-average-calculator': {
    sections: [
      {
        heading: 'Simple vs Weighted Grade Average',
        paragraphs: [
          'A simple grade average treats every mark equally — add all percentages and divide by the number of units. WAM does not work that way. Credit-weighted averaging gives more influence to 12-credit units than 6-credit electives, which is why a distinction in a core unit moves your degree average more than the same mark in a small breadth subject.',
          'This calculator shows both results side by side so you can see when a simple mean misleads you. If the weighted result is lower, your high-credit units are underperforming relative to lighter loads — a common pattern before students focus revision on core subjects.',
        ],
      },
      {
        heading: 'Worked Example',
        table: {
          headers: ['Unit', 'Mark', 'Credit points', 'Weighted contribution'],
          rows: [
            ['FIT1045', '78', '6', '468'],
            ['MAT1830', '72', '6', '432'],
            ['ACC1200', '85', '6', '510'],
          ],
        },
        paragraphs: [
          'Simple average = (78 + 72 + 85) ÷ 3 = 78.33%. Credit-weighted average with equal 6 cp units matches the simple mean here. When credit loads differ — for example one 12 cp core and two 6 cp electives — the weighted result diverges. Use the main WAM calculator for official year-level weighting (Year 1 = 0.5).',
        ],
      },
      {
        heading: 'When to Use This Tool',
        bullets: [
          'Compare simple vs credit-weighted means before results release.',
          'Check whether a strong elective is masking a weak core unit.',
          'Pair with the weighted average calculator for semester-only groups.',
          'Read our how to calculate wam article for the full Uni formula.',
        ],
        paragraphs: [
          'For cumulative degree planning, always confirm final numbers on WES. Calculator outputs are for orientation, not official reporting.',
        ],
      },
    ],
  },
  '/percentage-to-gpa-calculator': {
    sections: [
      {
        heading: 'How Uni Maps Percentage to GPA',
        paragraphs: [
          'Uni coursework uses percentage marks on your transcript, but scholarships, exchange applications, and some employer forms ask for GPA instead. The university converts percentage bands to letter grades first — High Distinction (80%+), Distinction (70–79%), Credit (60–69%), Pass (50–59%) — then assigns official grade points on the 4.0 and 7.0 scales.',
          'This calculator applies those published band cut-offs so you can translate a single unit mark or an overall percentage snapshot into GPA values without guessing. It is especially useful when you have a raw exam percentage but need to know whether it sits in Distinction or Credit territory for planning.',
        ],
        table: {
          headers: ['Percentage band', 'Letter grade', 'GPA (4.0)', 'GPA (7.0)'],
          rows: [
            ['80–100%', 'HD', '4.0', '7.0'],
            ['70–79%', 'D', '3.0', '6.0'],
            ['60–69%', 'C', '2.0', '5.0'],
            ['50–59%', 'P', '1.0', '4.0'],
            ['0–49%', 'N', '0.0', '0.0'],
          ],
        },
      },
      {
        heading: 'Two Ways to Enter Your Mark',
        paragraphs: [
          'Enter a percentage directly if you already know your mark — for example 76% from a Moodle gradebook. Alternatively, enter marks obtained and marks total (such as 38 out of 50) and the tool derives the percentage before mapping to GPA. That second path mirrors how many assignments report partial scores.',
          'Remember that Uni transcript GPA is credit-weighted across all units, not a straight conversion of one percentage. Use this page for band lookup and single-unit planning; use the Uni CGPA calculator when you need cumulative GPA from a full unit list.',
        ],
        bullets: [
          'Single-unit percentage → instant 4.0 and 7.0 GPA equivalents.',
          'Partial marks (obtained ÷ total) supported for assignment-style scores.',
          'Pair with WAM to GPA calculator when you have a degree average, not one mark.',
          'See our WAM to GPA conversion article for cross-scale strategy.',
        ],
      },
      {
        heading: 'Common Student Questions',
        paragraphs: [
          'A 79% and an 80% are both strong marks, but the GPA step change at 80 can matter for merit cut-offs — this tool shows exactly which band you land in. Borderline marks are worth confirming on WES once results are final.',
          'International students comparing Uni bands to a home-country 10-point scale should also try the 10-point GPA to WAM calculator after getting the percentage equivalent.',
        ],
      },
    ],
  },
  '/7-0-scale-gpa-calculator': {
    sections: [
      {
        heading: 'Why Australia Uses a 7-Point GPA Scale',
        paragraphs: [
          'Australian universities often report GPA on a 7-point scale for HDR entry, graduate certificate comparisons, and cross-institution benchmarking. On this scale, High Distinction maps to 7, Distinction to 6, Credit to 5, Pass to 4, and Fail to 0 — a wider spread than the US-style 4.0 scale.',
          'Uni still publishes percentage WAM on official transcripts, but when a form asks for "GPA out of 7" you need band-accurate conversion, not a linear guess. This calculator takes your percentage mark and returns the standard Australian 7.0 value used in coursework planning.',
        ],
      },
      {
        heading: 'Percentage to 7.0 Mapping',
        table: {
          headers: ['Mark range', 'Grade', '7.0 GPA'],
          rows: [
            ['80%+', 'HD', '7.0'],
            ['70–79%', 'D', '6.0'],
            ['60–69%', 'C', '5.0'],
            ['50–59%', 'P', '4.0'],
            ['Below 50%', 'N', '0.0'],
          ],
        },
        paragraphs: [
          'The mapping is discrete — there is no 6.5 for a 75%. Your mark sits entirely within one band until it crosses the next threshold. That is why two students both "in Distinction" can have different percentages but the same 6.0 GPA on a 7-point summary.',
        ],
      },
      {
        heading: 'When to Use 7.0 vs 4.0',
        bullets: [
          'Postgraduate and research program forms often specify 7.0 GPA minimums.',
          'Compare Uni performance to other Australian universities on a like-for-like scale.',
          'Convert back to 4.0 with the 7.0 to 4.0 GPA calculator when US forms appear.',
          'For cumulative degree GPA, use semester or CGPA tools with every completed unit.',
        ],
        paragraphs: [
          'Always cite the scale you used on applications ("GPA 6.2 on a 7.0 scale") to avoid confusion with US 4.0 reporting.',
        ],
      },
    ],
  },
  '/wam-to-4-0-gpa-calculator': {
    sections: [
      {
        heading: 'Converting Overall WAM to 4.0 GPA',
        paragraphs: [
          'Your WAM is a credit-weighted percentage average across completed coursework. Many scholarship panels, US exchange programs, and graduate school portals request GPA on a 4.0 scale instead. Uni maps WAM bands to GPA tiers: WAM 80+ aligns with HD (4.0), 70–79 with D (3.0), 60–69 with C (2.0), and 50–59 with P (1.0).',
          'This calculator gives the band-equivalent 4.0 GPA from your overall WAM snapshot — fast for form filling when you do not need to re-enter every unit. Official transcript GPA still comes from per-unit letter grades with credit weighting, which can differ slightly from a single WAM band mapping.',
        ],
      },
      {
        heading: 'WAM Band Reference',
        table: {
          headers: ['WAM range', 'Typical band', '4.0 GPA equivalent'],
          rows: [
            ['80–100', 'High Distinction', '4.0'],
            ['70–79', 'Distinction', '3.0'],
            ['60–69', 'Credit', '2.0'],
            ['50–59', 'Pass', '1.0'],
            ['Below 50', 'Fail', '0.0'],
          ],
        },
        paragraphs: [
          'A WAM of 76 sits in the Distinction band, so the planning equivalent is GPA 3.0 — even though your exact transcript GPA might be 3.1 or 2.9 depending on unit mix. Use the Uni CGPA calculator when precision to three decimals matters.',
        ],
      },
      {
        heading: 'Planning Tips',
        bullets: [
          'Scholarship cut-offs often cite WAM 70+ or GPA 3.0+ — check which metric your award uses.',
          'US-style forms may cap reporting at 4.0; do not inflate beyond Uni bands.',
          'Pair with WAM target calculator to see marks needed to cross the next GPA band.',
          'Read our WAM to GPA guide for employer and postgrad reporting context.',
        ],
        paragraphs: [
          'Verify final numbers on WES before submitting official applications. Calculator output is for orientation only.',
        ],
      },
    ],
  },
  '/wam-to-7-0-gpa-calculator': {
    sections: [
      {
        heading: 'WAM to Australian 7-Point GPA',
        paragraphs: [
          'Australian HDR programs, government scholarship schemes, and some faculty merit lists reference GPA on a 7-point scale. If you know your WAM but the application form asks for "GPA /7", this tool maps your percentage average to the standard coursework bands: HD = 7, D = 6, CR = 5, P = 4.',
          'Unlike a linear formula (WAM ÷ 100 × 7), Uni uses discrete grade bands. A WAM of 78 and 72 both fall in Distinction and both plan as 6.0 on the 7-point scale, even though their percentages differ.',
        ],
      },
      {
        heading: 'Band Mapping Table',
        table: {
          headers: ['WAM', '7.0 GPA', 'Letter grade'],
          rows: [
            ['80+', '7.0', 'HD'],
            ['70–79', '6.0', 'D'],
            ['60–69', '5.0', 'C'],
            ['50–59', '4.0', 'P'],
            ['Below 50', '0.0', 'N'],
          ],
        },
        paragraphs: [
          'Students near band boundaries — for example WAM 79.5 vs 80.1 — should treat the result as sensitive to final unit marks. Small improvements in remaining subjects can shift both WAM and 7.0 GPA tier.',
        ],
      },
      {
        heading: 'Related Tools',
        bullets: [
          'Convert 7.0 back to WAM ranges with the 7.0 GPA to WAM calculator.',
          'Compare 4.0 and 7.0 reporting with the WAM to 4.0 GPA calculator.',
          'Build cumulative GPA from unit lists using the Uni CGPA calculator.',
          'Browse GPA conversion articles for cross-university comparisons.',
        ],
        paragraphs: [
          'When applying interstate, note that other universities may use slightly different band cut-offs — always read the target institution\'s policy.',
        ],
      },
    ],
  },
  '/wam-to-cgpa-calculator': {
    sections: [
      {
        heading: 'WAM vs CGPA at Uni',
        paragraphs: [
          'WAM (Weighted Average Mark) is your percentage-based degree average. CGPA (Cumulative Grade Point Average) is the credit-weighted mean of official 4.0 grade points across all completed units. They measure the same academic record but express it differently — WAM as %, CGPA as grade points.',
          'This calculator helps you benchmark WAM against CGPA bands for scholarship tiers, Dean\'s list thresholds, and postgrad cut-offs when you only have WAM visible on WES but the form asks for CGPA-style reporting.',
        ],
      },
      {
        heading: 'Approximate Band Alignment',
        table: {
          headers: ['WAM band', 'Typical CGPA range (4.0)', 'Standing'],
          rows: [
            ['80+', '3.7–4.0', 'High Distinction average'],
            ['70–79', '3.0–3.6', 'Distinction average'],
            ['60–69', '2.0–2.9', 'Credit average'],
            ['50–59', '1.0–1.9', 'Pass average'],
          ],
        },
        paragraphs: [
          'Exact CGPA depends on how many units sit at the top or bottom of each band — a WAM of 74 with many 79s plans differently from 74 with many 71s. For transcript-accurate CGPA, enter each unit in the Uni CGPA calculator.',
        ],
      },
      {
        heading: 'Best Practice',
        bullets: [
          'Use WAM-to-CGPA here for quick planning ranges before applications.',
          'Run full unit-by-unit maths when the form requires official CGPA.',
          'Track semester movement with the semester GPA calculator.',
          'See our CGPA article for how repeats and withdrawn fails affect cumulative GPA.',
        ],
        paragraphs: [
          'Uni may display both metrics on different screens — export your academic record if you need the authoritative CGPA figure.',
        ],
      },
    ],
  },
  '/4-0-gpa-to-wam-calculator': {
    sections: [
      {
        heading: 'What 4.0 GPA Means at Uni',
        paragraphs: [
          'On Uni official 4.0 scale, High Distinction = 4.0, Distinction = 3.0, Credit = 2.0, Pass = 1.0, and Fail = 0.0. When a scholarship brief or transfer guide cites "GPA 3.0 required", that typically maps to Distinction-level performance — roughly WAM 70–79% on the percentage scale.',
          'This reverse converter takes your 4.0 GPA input and returns the WAM percentage band equivalent. Because each GPA step covers a 10-point WAM range, the result is a planning band, not a precise single percentage.',
        ],
      },
      {
        heading: 'GPA to WAM Band Table',
        table: {
          headers: ['4.0 GPA', 'Letter grade', 'WAM range'],
          rows: [
            ['4.0', 'HD', '80–100%'],
            ['3.0', 'D', '70–79%'],
            ['2.0', 'C', '60–69%'],
            ['1.0', 'P', '50–59%'],
            ['0.0', 'N', 'Below 50%'],
          ],
        },
        paragraphs: [
          'A GPA of 3.0 therefore plans as WAM 70–79. If you need a single midpoint for mental maths, many students use 75% as a Distinction anchor — but official comparisons should cite the full band.',
        ],
      },
      {
        heading: 'Use Cases',
        bullets: [
          'Translate US-style GPA requirements into WAM targets.',
          'Check whether your transcript GPA meets a WAM 70 scholarship floor.',
          'Pair with WAM target calculator once you know your desired band.',
          'See our GPA to WAM article for employer and postgrad reporting.',
        ],
        paragraphs: [
          'Cumulative transcript GPA can sit between bands when units mix grades — confirm on WES before relying on a single band for competitive applications.',
        ],
      },
    ],
  },
  '/7-0-gpa-to-wam-calculator': {
    sections: [
      {
        heading: '7-Point GPA to WAM',
        paragraphs: [
          'Australian institutions commonly describe strong standing as "GPA 6.0/7" (Distinction) or "GPA 7.0/7" (High Distinction). Uni expresses the same performance as WAM percentages on your academic record. This calculator maps 7.0 scale inputs to WAM bands for quick comparison.',
          'The conversion is band-based, not linear. GPA 6.0 on a 7-point scale corresponds to Distinction — WAM 70–79 — regardless of whether your exact WAM is 71 or 78.',
        ],
      },
      {
        heading: 'Reference Mapping',
        table: {
          headers: ['7.0 GPA', 'Grade', 'WAM equivalent'],
          rows: [
            ['7.0', 'HD', '80%+'],
            ['6.0', 'D', '70–79%'],
            ['5.0', 'C', '60–69%'],
            ['4.0', 'P', '50–59%'],
            ['0.0', 'N', 'Below 50%'],
          ],
        },
        paragraphs: [
          'Students transferring from universities that report only 7-point GPA can use this tool to set Uni-style WAM goals for remaining semesters.',
        ],
      },
      {
        heading: 'Next Steps',
        bullets: [
          'Convert WAM back to 7.0 with the WAM to 7.0 GPA calculator.',
          'Model improvement with the WAM projection calculator.',
          'Compare 4.0 and 7.0 scales using the 4.0 to 7.0 GPA converter.',
          'Browse merit and honours articles for faculty-specific cut-offs.',
        ],
        paragraphs: [
          'Faculty honours classifications may use WAM directly rather than GPA — check your course map before planning solely on 7-point conversions.',
        ],
      },
    ],
  },
  '/cgpa-to-wam-calculator': {
    sections: [
      {
        heading: 'From Cumulative GPA to WAM Bands',
        paragraphs: [
          'CGPA summarises your entire completed enrolment as a single grade-point average — at Uni, on the official 4.0 scale. WAM is the parallel percentage average weighted by credit points. Employers and faculties may ask for either metric; this tool translates CGPA bands into WAM ranges for planning.',
          'Because CGPA aggregates every unit, one failed subject or a string of high distinctions shifts the cumulative figure slowly. Use this converter for snapshot benchmarking, then drill into unit marks when you need to diagnose what moved your average.',
        ],
      },
      {
        heading: 'Typical CGPA to WAM Alignment',
        table: {
          headers: ['CGPA (4.0)', 'Planning WAM band', 'Standing label'],
          rows: [
            ['3.5–4.0', '80–100%', 'HD average'],
            ['3.0–3.4', '70–79%', 'Distinction average'],
            ['2.0–2.9', '60–69%', 'Credit average'],
            ['1.0–1.9', '50–59%', 'Pass average'],
          ],
        },
        paragraphs: [
          'Exact alignment varies with your unit mix. CGPA 3.2 might pair with WAM 74 or WAM 76 depending on whether your Distinction marks cluster high or low in the band.',
        ],
      },
      {
        heading: 'When Accuracy Matters',
        bullets: [
          'Quick planning: use CGPA input here for WAM band orientation.',
          'Official reporting: pull WAM from WES, not inferred from CGPA alone.',
          'Improvement modelling: combine with WAM target and projection tools.',
          'International CGPA: try the 10-point GPA to WAM calculator for non-Uni scales.',
        ],
        paragraphs: [
          'Scholarship renewal letters sometimes cite both metrics — always submit the figure the application explicitly requests.',
        ],
      },
    ],
  },
  '/gpa-to-percentage-calculator': {
    sections: [
      {
        heading: 'Why Convert GPA Back to Percentage?',
        paragraphs: [
          'GPA compresses your performance into discrete grade steps — useful for forms, but less intuitive when you think in exam marks. Converting GPA to percentage returns a Uni mark range so you can set realistic unit targets: GPA 3.0 plans as roughly 70–79%, GPA 4.0 as 80%+.',
          'This is especially helpful when a placement provider asks for "expected percentage average" but your mental model runs on transcript GPA from WES.',
        ],
      },
      {
        heading: 'Uni Band Midpoints',
        table: {
          headers: ['4.0 GPA', 'Grade', 'Percentage range', 'Planning midpoint'],
          rows: [
            ['4.0', 'HD', '80–100%', '~85%'],
            ['3.0', 'D', '70–79%', '~75%'],
            ['2.0', 'C', '60–69%', '~65%'],
            ['1.0', 'P', '50–59%', '~55%'],
          ],
        },
        paragraphs: [
          'Midpoints are illustrative only — Uni does not publish a single "official" percentage for each GPA step. Use ranges when setting targets, not the midpoint alone, if you are near a band boundary.',
        ],
      },
      {
        heading: 'Practical Uses',
        bullets: [
          'Translate scholarship GPA floors into semester mark targets.',
          'Explain Uni standing to employers used to percentage averages.',
          'Cross-check 7.0 GPA using the 7.0 scale calculator first, then convert.',
          'Read our GPA conversion articles for postgrad application tips.',
        ],
        paragraphs: [
          'For unit-level precision, enter actual marks in the WAM calculator rather than inferring from GPA alone.',
        ],
      },
    ],
  },
  '/4-0-to-7-0-gpa-calculator': {
    sections: [
      {
        heading: 'Aligning 4.0 and 7.0 Scales',
        paragraphs: [
          'Uni coursework grade bands align across both common Australian reporting scales. High Distinction is 4.0 on the US-style scale and 7.0 on the Australian scale; Distinction is 3.0 and 6.0 respectively. This one-to-one band mapping means conversion is straightforward once you know which letter grade tier you occupy.',
          'Use this tool when one application asks for 4.0 GPA and another asks for 7.0 — you should report consistent band standing, not mathematically scaled values that do not exist in Uni policy.',
        ],
      },
      {
        heading: 'Cross-Scale Reference',
        table: {
          headers: ['Letter grade', '4.0 GPA', '7.0 GPA', 'WAM band'],
          rows: [
            ['HD', '4.0', '7.0', '80%+'],
            ['D', '3.0', '6.0', '70–79%'],
            ['C', '2.0', '5.0', '60–69%'],
            ['P', '1.0', '4.0', '50–59%'],
            ['N', '0.0', '0.0', 'Below 50%'],
          ],
        },
        paragraphs: [
          'Do not multiply 4.0 by 1.75 to get 7.0 — that linear approach misstates Pass and Credit tiers. Always use band mapping.',
        ],
      },
      {
        heading: 'Application Tips',
        bullets: [
          'Label which scale you report on every form ("GPA 3.0/4.0" vs "GPA 6.0/7.0").',
          'HDR programs often prefer 7.0 — convert from 4.0 here before submitting.',
          'US exchange forms typically want 4.0 — use the reverse 7.0 to 4.0 converter.',
          'Pair with percentage to GPA tools when you start from raw marks.',
        ],
        paragraphs: [
          'If your transcript shows only WAM, convert WAM to GPA first, then use this tool for scale switching.',
        ],
      },
    ],
  },
  '/7-0-to-4-0-gpa-calculator': {
    sections: [
      {
        heading: '7.0 to 4.0 GPA for International Forms',
        paragraphs: [
          'Many US graduate programs, LinkedIn profile templates, and global ranking sites default to the 4.0 GPA scale. Australian students with 7-point transcripts need band-accurate conversion — not a naive multiply-by-0.57 formula — to represent Uni standing honestly.',
          'Uni maps each 7.0 step to the equivalent 4.0 grade point: 7→4, 6→3, 5→2, 4→1, 0→0. This calculator applies that standard coursework alignment.',
        ],
      },
      {
        heading: 'Conversion Table',
        table: {
          headers: ['7.0 GPA', '4.0 GPA', 'Typical standing'],
          rows: [
            ['7.0', '4.0', 'High Distinction'],
            ['6.0', '3.0', 'Distinction'],
            ['5.0', '2.0', 'Credit'],
            ['4.0', '1.0', 'Pass'],
            ['0.0', '0.0', 'Fail'],
          ],
        },
        paragraphs: [
          'Partial values like 6.3 on a 7-point transcript usually mean your cumulative average sits between bands — check WES for the authoritative Uni 4.0 CGPA rather than inferring from a single converted number.',
        ],
      },
      {
        heading: 'Reporting Guidance',
        bullets: [
          'State both scales if unsure which the reader prefers.',
          'Attach Uni grading scale documentation to international applications when allowed.',
          'Use Uni CGPA calculator for cumulative 4.0 to three decimals.',
          'See our WAM to GPA articles for scholarship-specific reporting.',
        ],
        paragraphs: [
          'Never round Distinction (6.0/7) up to 4.0/4 unless your transcript band is genuinely High Distinction — misreporting can trigger verification issues.',
        ],
      },
    ],
  },
  '/semester-gpa-calculator': {
    sections: [
      {
        heading: 'Semester GPA (SGPA) Explained',
        paragraphs: [
          'Semester GPA measures one teaching period — Semester 1, Semester 2, or Summer — using Uni official 4.0 grade values weighted by credit points. It answers "how did I perform this semester?" rather than "how am I tracking overall?" Cumulative CGPA spans your entire degree and moves more slowly.',
          'Strong semester GPA with weak prior years lifts CGPA gradually; one bad semester after years of HDs barely dents a high cumulative average. Use SGPA to diagnose recent performance and CGPA for long-term standing.',
        ],
      },
      {
        heading: 'How SGPA Is Calculated',
        paragraphs: [
          'For each unit in the semester, multiply the official grade point (HD=4, D=3, C=2, P=1, N=0) by credit points. Sum those products, then divide by total semester credit points. A 12 cp HD contributes twice as much as a 6 cp Pass in the same semester.',
          'Example SGPA = (24 + 18 + 12) ÷ 18 = 3.0 — Distinction semester average on 18 credit points.',
        ],
        table: {
          headers: ['Unit', 'Grade', 'GP (4.0)', 'Credit pts', 'Weighted GP'],
          rows: [
            ['Unit A', 'HD', '4.0', '6', '24'],
            ['Unit B', 'D', '3.0', '6', '18'],
            ['Unit C', 'C', '2.0', '6', '12'],
          ],
        },
      },
      {
        heading: 'Related Planning Tools',
        bullets: [
          'Track percentage-based semester performance with the semester WAM calculator.',
          'Roll SGPA into degree CGPA using the GPA to CGPA calculator.',
          'Set next-semester targets with the Uni target GPA calculator.',
          'Read our semester average article for Uni credit load norms.',
        ],
        paragraphs: [
          'Withdrawn fails and incomplete grades follow Uni policy rules — confirm how WES treats them before calculating SGPA manually.',
        ],
      },
    ],
  },
  '/gpa-to-cgpa-calculator': {
    sections: [
      {
        heading: 'Updating CGPA After One Semester',
        paragraphs: [
          'When you finish a semester, your new CGPA blends prior cumulative performance with fresh semester GPA. The formula weights by credit points: CGPA_new = (CGPA_old × CP_old + SGPA × CP_semester) ÷ (CP_old + CP_semester). Higher-credit semesters pull CGPA more than light summer loads.',
          'This calculator lets you model that merge before results release — useful when asking "if I average Distinction this semester, where does my CGPA land?"',
        ],
      },
      {
        heading: 'Worked Example',
        paragraphs: [
          'Suppose CGPA 2.8 on 96 cp, and you expect SGPA 3.5 on 24 cp this semester. New CGPA = (2.8 × 96 + 3.5 × 24) ÷ 120 = 2.94. The jump looks modest because 96 cp of history anchors the result — realistic for mid-degree students.',
        ],
        bullets: [
          'Enter prior CGPA and completed credit points from WES.',
          'Add expected semester GPA and enrolled credit points.',
          'Run multiple scenarios (Credit vs Distinction semester) before exam period.',
          'Pair with WAM projection for percentage-based planning.',
        ],
      },
      {
        heading: 'Limitations',
        paragraphs: [
          'Repeated units, grade replacement policies, and withdrawn fails may adjust official CGPA differently from this generic formula. Export your academic record when precision matters for honours or scholarship renewal.',
          'For first-year students, semester GPA and CGPA are often identical until prior credit accumulates.',
        ],
      },
    ],
  },
  '/cgpa-to-gpa-calculator': {
    sections: [
      {
        heading: 'CGPA vs GPA Terminology',
        paragraphs: [
          'On Uni official transcripts, CGPA and cumulative GPA refer to the same 4.0 metric — the credit-weighted mean across all completed coursework units. Some international systems use "CGPA" for a 10-point scale instead. Context matters: always note which scale your figure uses.',
          'This calculator handles Uni-style 4.0 CGPA reporting and includes guidance when you hold a 10-point international CGPA that needs linear scaling for US-style 4.0 comparisons.',
        ],
      },
      {
        heading: '10-Point to 4.0 Linear Scale',
        table: {
          headers: ['10-point CGPA', 'Linear 4.0 equivalent', 'Uni planning note'],
          rows: [
            ['9.0–10.0', '3.6–4.0', 'Near HD average'],
            ['8.0–8.9', '3.2–3.6', 'Strong Distinction'],
            ['7.0–7.9', '2.8–3.2', 'Distinction/Credit border'],
            ['6.0–6.9', '2.4–2.8', 'Credit range'],
          ],
        },
        paragraphs: [
          'Linear conversion (CGPA ÷ 10 × 4) is indicative for cross-country forms — Uni band mapping may differ. Use the 10-point GPA to WAM calculator when translating into Uni percentage bands.',
        ],
      },
      {
        heading: 'When to Use This Tool',
        bullets: [
          'Clarify Uni CGPA = cumulative 4.0 GPA on official records.',
          'Convert international 10-point CGPA for US application drafts.',
          'Cross-check WES CGPA before employer background checks.',
          'Browse GPA conversion articles for faculty-specific rules.',
        ],
        paragraphs: [
          'Semester GPA tools handle one teaching period; this page focuses on cumulative figures and scale translation.',
        ],
      },
    ],
  },
  '/4-0-gpa-calculator': {
    sections: [
      {
        heading: 'Uni 4.0 GPA Calculator',
        paragraphs: [
          'Uni assigns official grade points on a 4.0 scale: HD=4.0, D=3.0, C=2.0, P=1.0, N=0.0 (with marginal fail nuances per policy). This calculator computes credit-weighted GPA from your unit list — the same structure WES uses for cumulative reporting, simplified for planning.',
          'Enter each unit\'s letter grade or grade point and credit points. The tool outputs semester or custom-group GPA to three decimal places, matching how scholarship panels often display cut-offs.',
        ],
      },
      {
        heading: 'Credit Weighting Matters',
        table: {
          headers: ['Scenario', 'Units', 'Simple GPA', 'Weighted GPA'],
          rows: [
            ['Equal 6 cp', 'HD + D + C (6 cp each)', '3.0', '3.0'],
            ['Mixed load', 'HD (12 cp) + P (6 cp)', '2.5', '3.33'],
          ],
        },
        paragraphs: [
          'The mixed load row shows why credit weighting matters: a 12 cp HD paired with one 6 cp Pass yields weighted GPA 3.33, not the simple mean 2.5. Always weight by credit when mirroring Uni maths.',
        ],
      },
      {
        heading: 'Related Calculators',
        bullets: [
          'Cumulative degree GPA: Uni CGPA calculator.',
          'Single-semester snapshot: semester GPA calculator.',
          'Convert results to WAM bands with GPA to WAM tools.',
          'Set improvement targets with Uni target GPA calculator.',
        ],
        paragraphs: [
          'Verify final GPA on WES — grading policy updates and unit exclusions can adjust official figures.',
        ],
      },
    ],
  },
  '/gpa-calculator': {
    sections: [
      {
        heading: 'Australian University GPA Basics',
        paragraphs: [
          'Australian students encounter GPA on both 4.0 and 7.0 scales depending on faculty, scholarship, and destination country. Uni coursework standardises on official 4.0 grade points for transcript GPA while displaying WAM percentages alongside. This general GPA calculator uses Uni published values — the right default for Uni students and a reasonable benchmark for comparable Australian coursework.',
          'GPA differs from WAM: GPA steps in discrete bands tied to letter grades; WAM preserves percentage detail. A student with marks spread 71–78 may share GPA 3.0 but have different WAM than a peer scoring 78–79 consistently.',
        ],
      },
      {
        heading: 'Uni Grade Point Reference',
        table: {
          headers: ['Grade', 'Mark range', '4.0 GP', '7.0 GP'],
          rows: [
            ['HD', '80%+', '4.0', '7.0'],
            ['D', '70–79%', '3.0', '6.0'],
            ['C', '60–69%', '2.0', '5.0'],
            ['P', '50–59%', '1.0', '4.0'],
            ['N', '<50%', '0.0', '0.0'],
          ],
        },
        paragraphs: [
          'Enter your units with grades and credit points for weighted GPA. For a single mark conversion, use percentage to GPA or 7.0 scale calculators instead.',
        ],
      },
      {
        heading: 'Choose the Right Tool',
        bullets: [
          'Degree cumulative GPA → Uni CGPA calculator.',
          'One semester only → semester GPA calculator.',
          'WAM on WES, form wants GPA → WAM to 4.0 or 7.0 converters.',
          'Long-form strategy → GPA conversion articles in our library.',
        ],
        paragraphs: [
          'This site is independent of the university — always confirm official figures on WES before submitting transcripts or scholarship forms.',
        ],
      },
    ],
  },
  '/atar-to-gpa-wam-calculator': {
    sections: [
      {
        heading: 'ATAR vs University Grades',
        paragraphs: [
          'ATAR ranks Year 12 performance for university entry through UAC and VTAC — it is a percentile-style rank, not a university GPA. WAM and GPA measure coursework after enrolment. There is no official Uni or UAC formula converting ATAR to WAM because they describe different life stages and statistical models.',
          'This tool shows indicative bands only: high ATAR correlates with stronger first-year readiness on average, but many students with moderate ATAR achieve Distinction WAM through consistent semester work. Treat output as conversation starter, not prediction.',
        ],
      },
      {
        heading: 'What the Indicative Bands Mean',
        paragraphs: [
          'Planning bands group typical first-year WAM trajectories reported anecdotally by students — not regression models from Uni data. Use them to set initial semester goals, then replace with actual WAM from the homepage calculator once you have results.',
        ],
        bullets: [
          'ATAR reflects scaled school subjects; WAM reflects credit-weighted university units.',
          'First-year Uni units use 0.5 level weighting in official WAM — GPA tools may differ.',
          'Scholarships tied to entry rank differ from merit awards tied to university WAM.',
          'See our university pathways articles for course transfer context.',
        ],
      },
      {
        heading: 'Better Planning Signals',
        paragraphs: [
          'Once enrolled, ignore ATAR for grade planning and track semester WAM, unit targets, and final exam calculators instead. Employers and postgrad programs care about degree outcomes, not secondary school rank.',
          'If you hold offers from multiple universities, compare course structure and support services — not ATAR-to-WAM guesses alone.',
        ],
      },
    ],
  },
  '/high-school-gpa-calculator': {
    sections: [
      {
        heading: 'US-Style High School GPA',
        paragraphs: [
          'American high schools often report GPA from course credits and letter grades, sometimes with "weighted" bumps for Advanced Placement or honours subjects (up to 5.0 on a 4.0 scale). Australian secondary students typically receive ATAR instead — this calculator serves international students, dual-citizens, and Uni students comparing US application requirements.',
          'Enter course name, letter grade, credit weight, and whether the course is weighted. The tool computes unweighted and weighted GPA using common US conventions — verify against your school\'s exact policy if applying domestically in the US.',
        ],
      },
      {
        heading: 'Weighted vs Unweighted',
        table: {
          headers: ['Course type', 'Grade', 'Unweighted GP', 'Weighted bump'],
          rows: [
            ['Standard', 'A', '4.0', '—'],
            ['Honours/AP', 'A', '4.0', '+1.0 → 5.0 cap'],
            ['Standard', 'B', '3.0', '—'],
            ['Honours/AP', 'B', '3.0', '+1.0 → 4.0'],
          ],
        },
        paragraphs: [
          'Weighted GPA rewards rigour but caps vary by district — some schools use +0.5 instead of +1.0. Use this output for orientation; attach official school transcripts for applications.',
        ],
      },
      {
        heading: 'Australian Context',
        bullets: [
          'Uni entry uses ATAR/IB/diploma pathways — not high school GPA.',
          'US exchange or grad school may request US-style GPA — use this tool, then verify with registrar.',
          'University GPA uses different scales — switch to Uni GPA calculators after enrolment.',
          'Browse pathways articles for Uni orientation and adjustment tips.',
        ],
        paragraphs: [
          'Once at Uni, track WAM and official CGPA on WES — high school GPA rarely appears on Australian employment forms.',
        ],
      },
    ],
  },
  '/10-point-gpa-to-wam-calculator': {
    sections: [
      {
        heading: 'International 10-Point CGPA',
        paragraphs: [
          'Universities in India, parts of Europe, and other regions often report CGPA on a 10-point scale. Uni admissions and credit transfer teams frequently need those results expressed as percentage or WAM bands. A common planning step: multiply 10-point CGPA by 10 to estimate percentage (8.5 → 85%), then map to Uni HD/D/C/P bands.',
          'This is indicative — home institutions may use different curves. Always supply official transcripts and Uni grading scale notes when applying for credit assessment.',
        ],
      },
      {
        heading: '10-Point to Uni Bands',
        table: {
          headers: ['10-pt CGPA', 'Est. %', 'Uni band', '4.0 GP'],
          rows: [
            ['9.0–10.0', '90–100%', 'HD', '4.0'],
            ['8.0–8.9', '80–89%', 'HD/D border', '3.0–4.0'],
            ['7.0–7.9', '70–79%', 'D', '3.0'],
            ['6.0–6.9', '60–69%', 'C', '2.0'],
            ['5.0–5.9', '50–59%', 'P', '1.0'],
          ],
        },
        paragraphs: [
          'Borderline CGPA like 7.9 vs 8.0 can straddle Distinction and HD planning zones — use conservative estimates for scholarship applications until Uni confirms converted grades.',
        ],
      },
      {
        heading: 'Transfer and Postgrad Use',
        bullets: [
          'Estimate WAM targets before starting at Clayton or Caulfield.',
          'Compare home CGPA to distinction average (WAM 70+) requirements.',
          'Cross-check with CGPA to WAM calculator for 4.0-scale transcripts.',
          'Read exchange and pathways articles for credit transfer workflow.',
        ],
        paragraphs: [
          'Uni makes final credit decisions — calculator output does not guarantee advanced standing or GPA recognition on your Australian transcript.',
        ],
      },
    ],
  },
  '/student-budget-calculator': {
    sections: [
      {
        heading: 'How to use the Student Budget Calculator',
        paragraphs: [
          'Choose whether you want to budget weekly or monthly.',
          'Add all your income sources, such as your part-time job, allowances, or scholarships.',
          'Add your expenses, like rent, groceries, transportation, and entertainment.',
          'Check your net balance to see if you are saving money or spending more than you earn!'
        ]
      }
    ]
  },
  '/study-time-calculator': {
    sections: [
      {
        heading: 'How to use the Study Time Calculator',
        paragraphs: [
          'Enter your total credit points for the semester (e.g., 24 for a standard full-time load).',
          'The calculator will estimate your total recommended weekly workload.',
          'See the breakdown between contact hours (classes, lectures) and self-directed study hours so you can plan your schedule.'
        ]
      }
    ]
  },
  '/attendance-calculator': {
    sections: [
      {
        heading: 'How to use the Attendance Calculator',
        paragraphs: [
          'Enter the total number of classes in the semester.',
          'Enter how many classes you have missed so far.',
          'The calculator will tell you if you can afford to skip any more classes while staying above the 75% or 80% hurdle.'
        ]
      }
    ]
  },
  '/essay-word-count-allocator': {
    sections: [
      {
        heading: 'How to use the Essay Word Count Allocator',
        paragraphs: [
          'Enter your total required word count.',
          'Adjust the percentages for your introduction and conclusion (typically 10% each).',
          'The tool will split your total words into introduction, body paragraphs, and conclusion blocks.'
        ]
      }
    ]
  },
  '/reading-time-calculator': {
    sections: [
      {
        heading: 'How to use the Reading Time Calculator',
        paragraphs: [
          'Enter the word count of your reading material.',
          'Select your estimated reading speed (default is 200 words per minute for average readers).',
          'See how many hours and minutes you need to set aside to finish the text.'
        ]
      }
    ]
  },
  '/pomodoro-study-timer': {
    sections: [
      {
        heading: 'How to use the Pomodoro Study Timer',
        paragraphs: [
          'Click Start to begin a 25-minute study session without distractions.',
          'When the timer ends, take a 5-minute break by clicking the Break button.',
          'Repeat this cycle to maximize productivity without feeling burnt out.'
        ]
      }
    ]
  },
  '/typing-time-estimator': {
    sections: [
      {
        heading: 'How to use the Typing Time Estimator',
        paragraphs: [
          'Enter your essay word count.',
          'Select your typing speed (Words Per Minute).',
          'The tool will output the absolute minimum time required to physically hit the keys to write the essay.'
        ]
      }
    ]
  },
  '/words-to-pages-converter': {
    sections: [
      {
        heading: 'How to use the Words to Pages Converter',
        paragraphs: [
          'Enter your total word count (e.g. 2000 words).',
          'Select your line spacing (single or double) and font type.',
          'The tool will output the approximate number of physical pages your essay will take up.'
        ]
      }
    ]
  },
  '/hecs-repayment-time-calculator': {
    sections: [
      {
        heading: 'How to use the HECS Debt Payoff Time Calculator',
        paragraphs: [
          'Enter your total HELP/HECS debt amount.',
          'Enter your expected graduate salary to determine your ATO repayment bracket.',
          'The tool calculates how many years it will take to clear the debt, considering annual indexation.'
        ]
      }
    ]
  },
  '/sharehouse-rent-splitter': {
    sections: [
      {
        heading: 'How to use the Sharehouse Rent Splitter',
        paragraphs: [
          'Enter the total weekly rent for the house.',
          'Add a roommate for each bedroom, entering their room size in square meters.',
          'Tick the box if their room has a private ensuite.',
          'The calculator will distribute 40% of the rent equally (for common areas) and 60% proportionally based on room size.'
        ]
      }
    ]
  },
  '/peer-review-mark-calculator': {
    sections: [
      {
        heading: 'How to use the Group Assignment Peer Mark Calculator',
        paragraphs: [
          'Enter the overall mark that your group received for the assignment.',
          'Enter your specific peer evaluation factor (e.g. SPARKPLUS multiplier like 0.8 or 1.1).',
          'Your final individual grade will be calculated (capped at 100%).'
        ]
      }
    ]
  },
  '/caffeine-crash-calculator': {
    sections: [
      {
        heading: 'How to use the Caffeine Crash Calculator',
        paragraphs: [
          'Enter the amount of caffeine you consumed in milligrams.',
          'Enter the time of day you consumed it.',
          'The tool uses the standard 5-hour half-life of caffeine to estimate when it will drop to sleep-safe levels.'
        ]
      }
    ]
  },
  '/student-tax-calculator': {
    sections: [
      {
        heading: 'How to use the Student Tax Calculator',
        paragraphs: [
          'Enter your estimated total gross income for the financial year.',
          'The calculator will tell you if you are under the $18,200 tax-free threshold.',
          'If you earn over the threshold, it will estimate your income tax and Medicare levy based on the latest ATO rates.'
        ]
      }
    ]
  },
  '/youth-allowance-estimator': {
    sections: [
      {
        heading: 'How to use the Youth Allowance Estimator',
        paragraphs: [
          'Enter your age and select whether you are considered independent by Centrelink.',
          'Select whether you live at the parental home or away from home.',
          'The tool will output the maximum base fortnightly rate you may be eligible for. Note that income and asset tests apply.'
        ]
      }
    ]
  },
  '/commute-vs-rent-calculator': {
    sections: [
      {
        heading: 'How to use the Commute vs Rent Calculator',
        paragraphs: [
          'Enter the weekly rent for a place close to campus, and a place further away.',
          'Enter your daily transport costs (e.g. Myki cap) and how many hours you spend commuting each day.',
          'The tool compares the total financial cost and reveals the "hidden" cost of your lost time.'
        ]
      }
    ]
  },
  '/standard-drinks-calculator': {
    sections: [
      {
        heading: 'How to use the Standard Drinks Calculator',
        paragraphs: [
          'Enter the volume of your drink in millilitres (e.g., 375mL for a can).',
          'Enter the Alcohol by Volume percentage (e.g., 4.8%).',
          'The tool applies the Australian formula (Volume x ABV x 0.789) to tell you exactly how many standard drinks you are consuming.'
        ]
      }
    ]
  },
  '/detailed-text-analyzer': {
    sections: [
      {
        heading: 'How to use the Text & Speech Analyzer',
        paragraphs: [
          'Paste your essay, speech, or presentation script into the text box.',
          'The tool will instantly count your words, characters, sentences, and paragraphs.',
          'It also accurately estimates how long it will take to present the speech out loud based on an average speaking speed of 140 words per minute.'
        ]
      }
    ]
  },
  '/lecture-speed-calculator': {
    sections: [
      {
        heading: 'How to use the Lecture Speed Calculator',
        paragraphs: [
          'Enter the total hours and minutes of your lecture video.',
          'Select your desired playback speed (e.g., 1.25x, 1.5x, 2x).',
          'The tool will output exactly how much real time it will take you to watch the video, and how many minutes you save.'
        ]
      }
    ]
  },
  '/sleep-cycle-calculator': {
    sections: [
      {
        heading: 'How to use the Sleep Cycle Calculator',
        paragraphs: [
          'Enter the exact time your alarm is set to go off in the morning.',
          'The tool works backwards in 90-minute REM sleep cycle increments.',
          'It will provide several exact times you should try to fall asleep (with a 15-minute buffer built in) to wake up feeling completely refreshed.'
        ]
      }
    ]
  },
  '/textbook-reading-time-calculator': {
    sections: [
      {
        heading: 'How to use the Textbook Reading Time Calculator',
        paragraphs: [
          'Enter the total number of pages you need to read for your homework or chapter.',
          'Select your average reading pace based on the density of the material.',
          'The tool will output the total number of study hours you should block out in your calendar to finish the reading.'
        ]
      }
    ]
  },
  '/text-case-converter': {
    sections: [
      {
        heading: 'How to use the Text Case Converter',
        paragraphs: [
          'Paste any string of text into the large text box.',
          'Click the buttons above to instantly convert the entire text to UPPERCASE, lowercase, Sentence case, or Title Case.',
          'Use the "Copy to Clipboard" button to instantly copy the correctly formatted text.'
        ]
      }
    ]
  },
  '/daily-coffee-cost-calculator': {
    sections: [
      {
        heading: 'How to use the Daily Coffee Cost Calculator',
        paragraphs: [
          'Enter the price you pay for your daily coffee, energy drink, or treat.',
          'Enter how many times per week you make this purchase.',
          'The tool will calculate your weekly, monthly, and yearly expenditure. It will also show you how much that money would grow to if invested over 10 years at a 5% return.'
        ]
      }
    ]
  },
  '/hecs-indexation-calculator': {
    sections: [
      {
        heading: 'How to use the HECS Indexation Calculator',
        paragraphs: [
          'Enter your current HECS/HELP debt balance.',
          'Enter the estimated or actual CPI indexation rate (usually announced in May).',
          'The tool will instantly show you exactly how much debt will be added to your balance overnight on June 1st.'
        ]
      }
    ]
  },
  '/alphabetizer': {
    sections: [
      {
        heading: 'How to use the Alphabetizer',
        paragraphs: [
          'Paste your unsorted list of references, names, or words into the large text area.',
          'Make sure each item is on its own line.',
          'Click the "Sort A-Z" or "Sort Z-A" button. The tool will automatically remove empty lines and alphabetize the entire list for you instantly.'
        ]
      }
    ]
  },
  '/days-between-dates-calculator': {
    sections: [
      {
        heading: 'How to use the Days Between Dates Calculator',
        paragraphs: [
          'Select your starting date (this defaults to today).',
          'Select your target end date (e.g., your exam date or assignment deadline).',
          'The tool calculates the exact number of days between the two dates (not including the final day itself), and breaks it down into weeks and months.'
        ]
      }
    ]
  },
  '/percentage-calculator': {
    sections: [
      {
        heading: 'How to use the Percentage Calculator',
        paragraphs: [
          'Use the first row to calculate a specific percentage of a number (e.g., what is 20% of 150).',
          'Use the second row to find out what percentage one number is of another (e.g., 30 is what percent of 150).',
          'Use the third row to calculate the percentage increase or decrease between two numbers over time.'
        ]
      }
    ]
  },
  '/binary-to-text-converter': {
    sections: [
      {
        heading: 'How to use the Binary to Text Converter',
        paragraphs: [
          'Select your mode: "Text to Binary" or "Binary to Text".',
          'Paste your input into the top text box.',
          'The translated output will instantly appear in the bottom box, formatted correctly using standard ASCII 8-bit encoding.'
        ]
      }
    ]
  },
  '/age-calculator': {
    sections: [
      {
        heading: 'How to use the Age Calculator',
        paragraphs: [
          'Select your exact Date of Birth from the calendar.',
          'The target date automatically defaults to today, but you can change it to any future or past date.',
          'The tool will instantly show you exactly how many years, months, and days old you are.'
        ]
      }
    ]
  },
  '/random-number-generator': {
    sections: [
      {
        heading: 'How to use the Random Number Generator',
        paragraphs: [
          'Set the minimum and maximum boundaries for your numbers.',
          'Choose how many random numbers you want to generate (up to 1,000 at once).',
          'Select whether you want to allow duplicate numbers or if every number must be unique, and hit Generate.'
        ]
      }
    ]
  },
  '/number-to-words-converter': {
    sections: [
      {
        heading: 'How to use the Number to Words Converter',
        paragraphs: [
          'Type any whole number into the text box (e.g., 1234).',
          'The tool will instantly translate the digits into written English text (e.g., One Thousand Two Hundred Thirty Four).',
          'Click the copy button to instantly paste it into your essay, legal document, or cheque.'
        ]
      }
    ]
  },
  '/study-break-calculator': {
    sections: [
      {
        heading: 'How to use the Study Break Calculator',
        paragraphs: [
          'Enter the total amount of time you have available to study today.',
          'Select a Focus Strategy. Pomodoro uses 25-minute sprints. DeskTime uses 52-minute blocks. Ultradian uses deep 90-minute focuses.',
          'The calculator will break your total time into an optimized schedule of study blocks and recovery breaks so you don\'t burn out.'
        ]
      }
    ]
  },
  '/hex-to-decimal-converter': {
    sections: [
      {
        heading: 'How to use the Hex to Decimal Converter',
        paragraphs: [
          'If you have a Hex value (like 1A3F), type it into the Hexadecimal box. The Decimal value will automatically appear.',
          'If you have a Decimal value (like 6719), type it into the Decimal box to find its Base-16 Hex equivalent.',
          'The tool will validate your input in real-time to ensure it only contains valid characters.'
        ]
      }
    ]
  },
  '/bmi-calculator': {
    sections: [
      { heading: 'How to use', paragraphs: ['Enter your height and weight to calculate your BMI and determine your health category.'] }
    ]
  },
  '/tip-calculator': {
    sections: [
      { heading: 'How to use', paragraphs: ['Enter the total bill and your desired tip percentage. You can also split the total amount across multiple people.'] }
    ]
  },
  '/salary-calculator': {
    sections: [
      { heading: 'How to use', paragraphs: ['Enter your annual salary to instantly see how much you make per hour, per day, per week, and per month.'] }
    ]
  },
  '/discount-calculator': {
    sections: [
      { heading: 'How to use', paragraphs: ['Enter the original price and the discount percentage to find out exactly how much you will save and the final price to pay.'] }
    ]
  },
  '/loan-calculator': {
    sections: [
      { heading: 'How to use', paragraphs: ['Enter your loan amount, interest rate, and the number of years to calculate your monthly EMI repayments and total interest costs.'] }
    ]
  },
  '/compound-interest-calculator': {
    sections: [
      { heading: 'How to use', paragraphs: ['Enter your starting balance, monthly contributions, and estimated interest rate to see how your money grows over time.'] }
    ]
  },
  '/margin-calculator': {
    sections: [
      { heading: 'How to use', paragraphs: ['Enter the cost of an item and its selling price to instantly calculate your gross profit and profit margin percentage.'] }
    ]
  },
  '/word-counter-tool': {
    sections: [
      { heading: 'How to use', paragraphs: ['Paste your text into the box to instantly see a live count of words, characters, and sentences.'] }
    ]
  },
  '/roman-numeral-converter': {
    sections: [
      { heading: 'How to use', paragraphs: ['Type a standard number to convert it to Roman Numerals, or type a Roman Numeral to find out its value in digits.'] }
    ]
  },
  '/password-generator': {
    sections: [
      { heading: 'How to use', paragraphs: ['Choose your desired password length and character types, then hit generate to create a completely random, secure password.'] }
    ]
  }
};

export function getCalculatorPageGuide(path: string): CalculatorPageGuideData | undefined {
  if (path === '/') {
    return undefined;
  }
  return EXPANDED_GUIDES[path] ?? CALCULATOR_PAGE_GUIDES[path];
}
