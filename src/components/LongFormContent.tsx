interface LongFormContentProps {
  topic: string;
}

export default function LongFormContent({ topic }: LongFormContentProps) {
  return (
    <section className="max-w-4xl mx-auto px-4 py-6">
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-7 md:p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Complete Student Guide: {topic}
        </h2>

        <div className="space-y-4 text-sm leading-7 text-gray-700 dark:text-gray-300">
          <p>
            This guide helps you understand {topic} in a practical way so you can use calculator results with confidence.
            A number is useful only when paired with correct input values and clear interpretation.
          </p>
          <p>
            Always use official marks and correct weights or credit points. If a result is estimated, keep it separate
            from confirmed scores. This simple habit improves planning accuracy and avoids confusion later.
          </p>
          <p>
            Use outputs for planning, not as official replacements. Policies can vary across institutions, so verify
            final decisions with official university documentation when needed.
          </p>
          <p>
            For best results, re-check your numbers after every major assessment and adjust your targets early. Small,
            consistent updates usually lead to better outcomes than last-minute planning.
          </p>
        </div>
      </div>
    </section>
  );
}
