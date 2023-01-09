import { Suspense, ComponentType, ComponentProps } from "react";
import Loader from "./Loader/Loader";

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = (Component: ComponentType) => (props: ComponentProps<any>) =>
  (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
