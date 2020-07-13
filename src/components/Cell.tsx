import React, { FunctionComponent, useMemo } from "react";

export const Cell: FunctionComponent = ({ children }) => useMemo(() => <div style={{ width: '100%', paddingBottom: '20px' }}>{children}</div>, [children]);
