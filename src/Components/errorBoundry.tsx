import React  from "react";
import type { ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
  showDetails: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      showDetails: false,
    };
  }

  static getDerivedStateFromError(): Partial<ErrorBoundaryState> {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold text-red-600">
            Something went wrong 😬😭 
          </h2>

          <p className="mt-2 text-gray-600">
            Please refresh the page or contact support.
          </p>

          {/* Toggle button */}
          <button
            onClick={() =>
              this.setState((prev) => ({ showDetails: !prev.showDetails }))
            }
            className="mt-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
          >
            {this.state.showDetails ? "Hide error details" : "Show error details"}
          </button>

          {/* Error details */}
          {this.state.showDetails && (
            <pre className="mt-4 p-4 text-left text-sm bg-gray-100 text-red-700 rounded overflow-auto">
              {this.state.error?.toString()}
              {"\n\n"}
              {this.state.errorInfo?.componentStack}
            </pre>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
