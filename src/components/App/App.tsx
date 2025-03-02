import { Button } from 'antd';
import React, { JSX } from "react";
import "src/components/App/App.css";

export default function App(): JSX.Element {
    return (
        <>
            <div className="content">
                <main>
                    <Button type="primary">Primary Button</Button>
                    <span></span>
                </main>
            </div>
        </>
    );
}
