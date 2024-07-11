using Avalonia.Controls;
using Avalonia.Interactivity;
using System;

namespace ProfitMarginCalculatorGUI
{
    // Main window class for the Profit Margin Calculator
    public partial class MainWindow : Window
    {
        // Constructor to initialize the main window
        public MainWindow()
        {
            InitializeComponent();
        }

        // Event handler for the Calculate button click
        private void CalculateButton_Click(object? sender, RoutedEventArgs e)
        {
            try
            {
                // Parse user input from textboxes with null-coalescing operator to handle possible null values
                decimal costPrice = decimal.Parse(CostPriceTextBox.Text ?? "0");
                decimal sellingPrice = decimal.Parse(SellingPriceTextBox.Text ?? "0");
                decimal overheadCost = decimal.Parse(OverheadCostTextBox.Text ?? "0");

                // Calculate profit
                decimal profit = sellingPrice - costPrice - overheadCost;

                // Calculate profit margin
                decimal profitMargin = (profit / sellingPrice) * 100;

                // Display the result
                ResultTextBlock.Text = $"Profit: {profit:C}\nProfit Margin: {profitMargin:F2}%";

                // Clear any previous error messages
                ErrorTextBlock.Text = string.Empty;
            }
            catch (FormatException)
            {
                // Handle invalid input format
                ErrorTextBlock.Text = "Invalid input. Please enter numeric values.";
            }
            catch (Exception ex)
            {
                // Handle other exceptions
                ErrorTextBlock.Text = $"An error occurred: {ex.Message}";
            }
        }
    }
}