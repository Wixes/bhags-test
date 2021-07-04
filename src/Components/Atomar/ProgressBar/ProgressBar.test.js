import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ProgressBar from './ProgressBar';

const ContainerComponent = () => {
    const [step, setStep] = React.useState(0);
    const items = [
        { displayName: 'test_1' },
        { displayName: 'test_2' },
        { displayName: 'test_3' },
    ];
    const handleClick = (item, idx) => {
        setStep(idx);
    };
    return <ProgressBar step={step} items={items} onClick={handleClick} />;
};

test('Step changed after click', async () => {
    render(<ContainerComponent />);
    const btn = await screen.findByTitle('test_2');
    fireEvent.click(btn);
    const element = await screen.getByText('test_2').closest('li');
    expect(element).toHaveClass('progress-bar__item--isCompleted');
});
