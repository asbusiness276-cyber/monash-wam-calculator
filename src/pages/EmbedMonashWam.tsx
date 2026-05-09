import Seo from '../components/Seo';
import WAMCalculator from '../components/WAMCalculator';

/** Minimal page for iframe embeds — main WAM calculator only */
export default function EmbedMonashWam() {
  return (
    <>
      <Seo
        title="Monash WAM Calculator (embed)"
        description="Embedded Monash WAM calculator preview."
        canonicalPath="/embed/monash-wam"
        noIndex
      />
      <div className="py-2">
        <WAMCalculator embedSuppressRecommendations />
      </div>
    </>
  );
}
