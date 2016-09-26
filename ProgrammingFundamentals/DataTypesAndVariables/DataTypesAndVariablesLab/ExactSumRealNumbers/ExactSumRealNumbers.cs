using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExactSumRealNumbers
{
    class ExactSumRealNumbers
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            decimal sum = 0m;

            for (int i = 1; i <= n; i++)
            {
                decimal number = decimal.Parse(Console.ReadLine());
                sum = sum + number;
            }

            Console.WriteLine(sum);
        }
    }
}
