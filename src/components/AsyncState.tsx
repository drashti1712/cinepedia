import type { ReactNode } from "react";

type AsyncStateProps = {
  loading: boolean;
  loadingComponent: ReactNode;
  error: string | null;
  children: ReactNode;
};

export default function AsyncState({
  loading,
  loadingComponent,
  error,
  children,
}: AsyncStateProps) {
  if (loading) {
    return (
      <>
        {loadingComponent ?? (
          <div className="flex min-h-screen items-center justify-center bg-black text-white">
            Loading...
          </div>
        )}
      </>
    );
  }
  if (error) {
    console.log(error);
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        {error}
      </div>
    );
  }
  return <>{children}</>;
}
