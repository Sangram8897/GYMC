
import Gutters from '../Gutters';
import { MetricsSizes } from '../variables';
import Layout from '../Layout';

const useTheme = () => {
    const baseTheme = {
        Gutters: Gutters(MetricsSizes),
        Layout: Layout()
    }

    return baseTheme
}

export default useTheme