export default function FrLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div lang="fr" dir="ltr">{children}</div>;
}