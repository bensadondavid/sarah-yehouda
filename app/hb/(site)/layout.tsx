export default function HbLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div lang="he" dir="rtl">{children}</div>;
}