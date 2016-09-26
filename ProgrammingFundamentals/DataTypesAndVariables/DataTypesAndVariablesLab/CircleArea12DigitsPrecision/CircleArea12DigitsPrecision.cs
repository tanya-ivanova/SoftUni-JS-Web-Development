using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CircleArea12DigitsPrecision
{
    class CircleArea12DigitsPrecision
    {
        static void Main(string[] args)
        {
            double radius = double.Parse(Console.ReadLine());
            double areaCircle = Math.PI * radius * radius;
            Console.WriteLine("{0:f12}", areaCircle);
        }
    }
}
