using System.Threading.Channels;

namespace Clothing {
    internal class Type {
        public Type() {
            Populate();  
        }

        //populates the array
        private void Populate() {
            string[] colors = { "red", "green", "blue" };
            string[] design = { "striped", "checked", "plain" };
            Shirt[] shirts = new Shirt[colors.Length * design.Length];


            for (int i = 0; i < colors.Length; i++) {
                for (int j = 0; j < design.Length; j++) {
                    shirts[i * design.Length + j] = new Shirt(colors[i], design[j]);
                }
            }
            Print(shirts);
        }


        //prints the array
        private void Print(Shirt[] shirts) {
            for (int i = 0;i < shirts.Length; i++) {
                Console.WriteLine(shirts[i]);
            }
        }


        static void Main(string[] args) {
            new Type();
        }
    }
}



internal class Shirt {
    public string Color { get; set; }
    public string Design { get; set; }

    public Shirt(string color, string design) {
        Color = color;
        Design = design;
    }

    public override string? ToString() {
        string ret = $"your shirt is {Color} and {Design}";
        return ret ;
    }
}
