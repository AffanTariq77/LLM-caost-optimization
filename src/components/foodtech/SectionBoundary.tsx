import { Component, Suspense } from "react";
import type { ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback: ReactNode;
}

interface State {
  failed: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { failed: false };

  static getDerivedStateFromError(): State {
    return { failed: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Section failed to render:", error, info.componentStack);
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

/** Isolates a lazy section so a failure never blanks the whole page. */
const SectionBoundary = ({ children, fallback }: Props) => (
  <ErrorBoundary fallback={fallback}>
    <Suspense fallback={fallback}>{children}</Suspense>
  </ErrorBoundary>
);

export default SectionBoundary;
