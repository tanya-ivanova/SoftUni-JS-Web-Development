using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TriplesLatinLetters
{
    class TriplesLatinLetters
    {
        static void Main(string[] args)
        {
            int n = int.Parse(Console.ReadLine());

            for (int i = 0; i < n; i++)
            {
                for (int j = 0; j < n; j++)
                {
                    for (int k = 0; k < n; k++)
                    {
                        char letterOne = (char)('a' + i);
                        char letterTwo = (char)('a' + j);
                        char letterThree = (char)('a' + k);

                        Console.Write(letterOne);
                        Console.Write(letterTwo);
                        Console.WriteLine(letterThree);
                    }
                }
            }
        }
    }
}
