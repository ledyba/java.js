public class Pi {

    public static double calc() {
        double pi = 16.0 * arcTan(1.0 / 5.0) - 4.0 * arcTan(1.0 / 239.0);
        return pi;
    }

    private static double arcTan(double x) {
        double ret = 0.0;
        double sig = x;
        double sqx = x * x;
        for (int i = 0; sig != 0.0; i++) {
            ret += sig / (double) (i + i + 1);
            sig = -sig * sqx;
        }
        return ret;
    }
}
