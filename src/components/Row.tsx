import React, { FunctionComponent, useMemo } from "react";

export const Row: FunctionComponent = ({ children }) => useMemo(() => <div style={{ display: 'flex' }}>{children}</div>, [children]);
