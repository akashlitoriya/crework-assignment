
export default function CTAButton({ typeBtn, children, onClick}: {typeBtn: "submit"|"button",children: React.ReactNode, onClick: () => void}) {
  return (
    <button type={typeBtn} onClick={onClick} className="bg-gradient-to-t from-gra-purple from-5% to-gra-purple-2  text-white py-4 px-6 rounded-lg font-semibold text-lg">
      {children}
    </button>
  );

}
