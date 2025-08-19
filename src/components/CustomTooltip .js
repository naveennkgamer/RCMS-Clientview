const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div
                style={{
                    backgroundColor: '#000',
                    opacity: '0.7',
                    color: '#fff',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    fontSize: '14px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
                }}
            >
                <p style={{ margin: 0 }}>{payload[0].name}: {payload[0].value}</p>
            </div>
        );
    }
    return null;
};

export default CustomTooltip;