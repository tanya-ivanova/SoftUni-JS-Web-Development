using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SpecialNumbers
{
    class SpecialNumbers
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());
            int sum = 0;
            
            for (int i = 1; i <= n; i++)
            {
                int number = i;

                while(number > 0)
                {
                    sum = sum + (number % 10);
                    number = number / 10;
                }                

                if ((sum == 5) || (sum == 7) || (sum == 11))
                {
                    Console.WriteLine("{0} -> True", i);
                }
                else
                {
                    Console.WriteLine("{0} -> False", i);
                }

                sum = 0;
            }
        }
    }
}
