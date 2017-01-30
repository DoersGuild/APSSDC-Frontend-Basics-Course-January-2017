(function($) {'use strict';
    var data = [{
        id: '1',
        name: 'Amar',
        age: 29
    }, {
        id: '2',
        name: 'Akbar',
        age: 26
    }, {
        id: '3',
        name: 'Anthony',
        age: 32
    }]; // JavaScript Object Notation - JSON
    function getHTMLRowForEmployee(employee) {
        // Generate and return the HTML row markup for a single employee object
        var html = '<tr>';
        html += '<td>'+employee.id+'</td>';
        html += '<td>'+employee.name+'</td>';
        html += '<td>'+employee.age+'</td>';
        html += '<td><button type="button" class="btn btn-danger js-delete-employee-record"><i class="glyphicon glyphicon-remove-sign" title="Delete Employee Record"></i></button></td>';
        html += '</tr>';
        return html;
    }
    $(function() {
        var $employeeRecords = $('#employeeRecords');
        $employeeRecords.on('click', '.js-delete-employee-record', function(e) { // Handle click events which started in/from .js-delete-employee-record and reached #employeeRecords - Called Event Delegation - works using event bubbling
            // Delete the row to which this button belongs
            // this = .js-delete-employee-record button element
            var $this = $(this);
            $this.closest('tr').remove();
        });
        $('#newEmployeeForm').on('submit', function(e) {
            e.preventDefault();
            // Get the values that the user entered
            var employee = {
                id: $('#newEmployeeID').val(),
                name: $('#newEmployeeName').val(),
                age: $('#newEmployeeAge').val()
            }, 
            formContext = this, // Special variable called "this" - it holds the current context - in this case it is the form element (not the jQuery object) where submit was triggered
            $newEmployeeFormSubmitIndicator = $('#newEmployeeFormSubmitIndicator'),
            $newEmployeeFormSubmitButton = $('#newEmployeeFormSubmitButton');
            console.log('New employee details', employee);
            // Save details on the backend
            $newEmployeeFormSubmitIndicator.removeClass('hide').show();
            $newEmployeeFormSubmitButton.prop('disabled', true);
            $.post('https://httpbin.org/post', employee, function(response) {
                console.log('Saved new employee data on the backend', response);
                // Add those values as a new row in the table
                var html = getHTMLRowForEmployee(employee);
                $employeeRecords.append(html);
                // Reset the form for future use
                formContext.reset();
            }, 'json').fail(function() {
                console.warn('Error saving employee data', arguments);
            }).always(function() {
                // Hide loading indicator
                $newEmployeeFormSubmitIndicator.hide();
                $newEmployeeFormSubmitButton.prop('disabled', false);
            });
            return false;
        });
        var addMultipleEmployeesToTable = function (employees) {
            // Iterate over the list of employees, generate the appropriate HTML and add it to #employeeRecords
            var html = '';
            for(var i = 0, l = employees.length; i < l; i++) {
                html += getHTMLRowForEmployee(employees[i]);
            }
            $employeeRecords.append(html);
        };
        // Load employees from data
        addMultipleEmployeesToTable(data);
        // Load additional employees
        $.getJSON('./data/additional_employees.json', {}, function(results){
            // Load up HTML records
            console.log('Received more employees', results);
            addMultipleEmployeesToTable(results);
        }).fail(function() {
            console.warn('Error loading data', arguments);
        }); // .fail, .done, .always
        $.post('https://httpbin.org/post', {
            data: JSON.stringify(data) 
        });
    });
})(jQuery);