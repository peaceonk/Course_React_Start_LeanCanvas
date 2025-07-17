// interface 방식
/*
interface BaseButtonProps {
  className?: string;
  children: React.ReactNode;
}
function BaseButton({ className, children }: BaseButtonProps) {
  return <button className={className}> {children}</button>;
} 
*/

// inline 방식
function BaseButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <button className={className}>{children}</button>;
}

export default BaseButton;
