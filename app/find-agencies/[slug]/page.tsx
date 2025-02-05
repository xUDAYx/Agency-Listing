import { getAgencyById } from "@/lib/firebase/agencies";
import { AgencyDetailComponent } from "../_components/agency-detail";
import { notFound } from "next/navigation";

export default async function AgencyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const agency = await getAgencyById(resolvedParams.slug);
  

  if (!agency) {
    notFound();
  }

  return <AgencyDetailComponent  agency={agency} />;
}
