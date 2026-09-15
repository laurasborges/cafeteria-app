import { StyleSheet, Text, View } from "react-native";


type CofeeCardProps = {
    name: string;
    description: string;
    price: string;
};

export default function CoffeCard({ 
    name,
    description,
    price,
 }: CofeeCardProps) {
    return(
            <View style={styles.cardItem}>
              <Text style={styles.menuCardTitle}>{name}</Text>
              <Text style={styles.menuDescription}>{description}</Text>
              <Text style={styles.menuPrice}>R$ {price}</Text>
            </View>

    )
};

const styles = StyleSheet.create({
    cardItem: {
    width: "48%",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    elevation: 3,
    marginBottom: 16
  },

  menuCardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2f2d2c",
  },

  menuDescription: {
    fontSize: 12,
    color: "#9b9b9b",
    marginTop: 4,
    lineHeight: 16,
  },

  menuPrice: {
    fontSize: 16,
    color: "#c67c4d",
    marginTop: 12,
    fontWeight: "800"
  }
});

