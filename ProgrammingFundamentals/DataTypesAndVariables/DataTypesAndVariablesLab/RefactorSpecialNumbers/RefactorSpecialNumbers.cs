using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RefactorSpecialNumbers
{
    class RefactorSpecialNumbers
    {
        static void Main(string[] args)
        {
            int finalNumber = int.Parse(Console.ReadLine());
            int sum = 0;
            bool isSpecialNumber = false;

            for (int counter = 1; counter <= finalNumber; counter++)
            {
                int number = counter;

                while (counter > 0)
                {
                    sum += counter % 10;
                    counter = counter / 10;
                }

                isSpecialNumber = (sum == 5) || (sum == 7) || (sum == 11);

                Console.WriteLine($"{number} -> {isSpecialNumber}");

                sum = 0;
                counter = number;
            }
        }
    }
}
