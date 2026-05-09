import Seo from '../components/Seo';
import WamToGpaToolCore from '../components/WamToGpaToolCore';

/** Minimal page for iframe embeds in articles — same calculator UI as /wam-to-gpa-calculator, no marketing chrome */
export default function EmbedWamToGpa() {
  return (
    <>
      <Seo
        title="WAM to GPA Calculator (embed)"
        description="Embedded WAM to GPA calculator preview."
        canonicalPath="/embed/wam-to-gpa"
        noIndex
      />
      <div className="max-w-xl mx-auto px-3 py-4 sm:px-4">
        <WamToGpaToolCore initialWam="76" enableProductPopup={false} />
      </div>
    </>
  );
}
