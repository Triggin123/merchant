
        let orderCount = 0; // To keep track of the number of orders
        let productList = []; // To store added products

        document.getElementById('loginForm').addEventListener('submit', function(event) {
            event.preventDefault();
            document.getElementById('loginContainer').classList.add('hidden');
            document.getElementById('catalogueContainer').classList.remove('hidden');
        });

        function showBulkUpload() {
            document.getElementById('catalogueContainer').classList.add('hidden');
            document.getElementById('bulkUploadContainer').classList.remove('hidden');
        }

        function showAddProducts() {
            document.getElementById('catalogueContainer').classList.add('hidden');
            document.getElementById('addProductsContainer').classList.remove('hidden');
        }

        function showOrders() {
            document.getElementById('catalogueContainer').classList.add('hidden');
            document.getElementById('ordersContainer').classList.remove('hidden');
        }

        function showAddSellers() {
            document.getElementById('catalogueContainer').classList.add('hidden');
            document.getElementById('addSellersContainer').classList.remove('hidden');
        }

        function showAddBuyers() {
            document.getElementById('catalogueContainer').classList.add('hidden');
            document.getElementById('addBuyersContainer').classList.remove('hidden');
        }

        function backToLogin() {
            document.getElementById('catalogueContainer').classList.add('hidden');
            document.getElementById('bulkUploadContainer').classList.add('hidden');
            document.getElementById('addProductsContainer').classList.add('hidden');
            document.getElementById('ordersContainer').classList.add('hidden');
            document.getElementById('addSellersContainer').classList.add('hidden');
            document.getElementById('addBuyersContainer').classList.add('hidden');
            document.getElementById('addBuyersPage').classList.add('hidden');
            document.getElementById('bulkUploadBuyersContainer').classList.add('hidden');
            document.getElementById('loginContainer').classList.remove('hidden');
            document.getElementById('message').innerText = '';
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
        }

        function uploadFiles() {
            const files = document.getElementById('fileInput').files;
            if (files.length > 0) {
                alert(`Uploading ${files.length} file(s)...`);
                for (const file of files) {
                    console.log(`Uploaded: ${file.name}`);
                }
                document.getElementById('uploadMessage').innerText = `${files.length} file(s) uploaded successfully.`;
            } else {
                alert('No files selected.');
            }
        }

        function addProduct() {
            const productName = document.getElementById('productName').value;
            const weight = document.getElementById('weight').value;
            const subcategory = document.getElementById('subcategory').value;
            const basicPrice = document.getElementById('basicPrice').value;
            const gst = document.getElementById('gst').value;
            const loadingPrice = document.getElementById('loadingPrice').value;
            const maxOrderQty = document.getElementById('maxOrderQty').value;
            const minOrderQty = document.getElementById('minOrderQty').value;
            const discount = document.getElementById('discount').value;
            const productImage = document.getElementById('productImage').files[0];

            if (productName && weight && subcategory && basicPrice && gst && loadingPrice && maxOrderQty && minOrderQty && discount && productImage) {
                const newProduct = {
                    productName,
                    weight,
                    subcategory,
                    basicPrice,
                    gst,
                    loadingPrice,
                    maxOrderQty,
                    minOrderQty,
                    discount,
                    productImageName: productImage.name
                };
                
                productList.push(newProduct);
                displayProducts();
                alert('Added product to catalogue!');
                backToAddProducts();
            } else {
                alert('Please fill all fields and upload an image.');
            }
        }

        function displayProducts() {
            const tableBody = document.getElementById('productTableBody');
            tableBody.innerHTML = ''; // Clear existing rows

            productList.forEach((product) => {
                const newRow = tableBody.insertRow();
                newRow.innerHTML = `
                    <td>${product.productName}</td>
                    <td>${product.weight}</td>
                    <td>${product.subcategory}</td>
                    <td>${product.basicPrice}</td>
                    <td>${product.gst}</td>
                    <td>${product.loadingPrice}</td>
                    <td>${product.maxOrderQty}</td>
                    <td>${product.minOrderQty}</td>
                    <td>${product.discount}</td>
                `;
            });

            document.getElementById('productListContainer').classList.remove('hidden');
        }

        function addOrder() {
            const orderId = document.getElementById('orderId').value;
            const retailerName = document.getElementById('retailerName').value;
            const dateTime = document.getElementById('dateTime').value;
            const orderValue = document.getElementById('orderValue').value;
            const purchaseOrder = document.getElementById('purchaseOrder').value;

            if (orderId && retailerName && dateTime && orderValue && purchaseOrder) {
                const tableBody = document.getElementById('ordersTableBody');
                orderCount++; // Increment the order count
                const newRow = tableBody.insertRow();
                newRow.innerHTML = `
                    <td>${orderCount}</td>
                    <td>${orderId}</td>
                    <td>${retailerName}</td>
                    <td>${dateTime}</td>
                    <td>${orderValue}</td>
                    <td>${purchaseOrder}</td>
                `;
                alert('Order added successfully!');
                document.getElementById('orderId').value = '';
                document.getElementById('retailerName').value = '';
                document.getElementById('dateTime').value = '';
                document.getElementById('orderValue').value = '';
                document.getElementById('purchaseOrder').value = '';
            } else {
                alert('Please fill all fields.');
            }
        }

        function addBuyer() {
            const buyerName = document.getElementById('buyerName').value;
            const businessName = document.getElementById('businessName').value;
            const gstNumber = document.getElementById('gstNumber').value;
            const officeAddress = document.getElementById('officeAddress').value;
            const deliveryAddress = document.getElementById('deliveryAddress').value;
            const membershipStatus = document.querySelector('input[name="membershipStatus"]:checked');

            if (buyerName && businessName && gstNumber && officeAddress && deliveryAddress) {
                const membership = membershipStatus ? membershipStatus.value : 'None';
                alert(`Added Buyer: ${buyerName}`);
                console.log(`Buyer Details:
                    Name: ${buyerName},
                    Business Name: ${businessName},
                    GST Number: ${gstNumber},
                    Office Address: ${officeAddress},
                    Delivery Address: ${deliveryAddress},
                    Membership Status: ${membership}`);
                backToAddBuyers();
            } else {
                alert('Please fill all fields.');
            }
        }

        function uploadBulkBuyers() {
            const files = document.getElementById('bulkFileInput').files;
            if (files.length > 0) {
                alert(`Uploading ${files.length} file(s)...`);
                for (const file of files) {
                    console.log(`Uploaded: ${file.name}`);
                }
                document.getElementById('bulkUploadMessage').innerText = `${files.length} file(s) uploaded successfully.`;
            } else {
                alert('No files selected.');
            }
        }

        function redirectToAddProductPage() {
            document.getElementById('addProductsContainer').classList.add('hidden');
            document.getElementById('addProductPage').classList.remove('hidden');
        }

        function backToCatalogue() {
            document.getElementById('bulkUploadContainer').classList.add('hidden');
            document.getElementById('addProductsContainer').classList.add('hidden');
            document.getElementById('ordersContainer').classList.add('hidden');
            document.getElementById('addSellersContainer').classList.add('hidden');
            document.getElementById('addBuyersContainer').classList.add('hidden');
            document.getElementById('addBuyersPage').classList.add('hidden');
            document.getElementById('bulkUploadBuyersContainer').classList.add('hidden');
            document.getElementById('catalogueContainer').classList.remove('hidden');
        }

        function backToAddProducts() {
            document.getElementById('addProductPage').classList.add('hidden');
            document.getElementById('addProductsContainer').classList.remove('hidden');
        }

        function showAddBuyersOptions() {
            document.getElementById('addBuyersContainer').classList.add('hidden');
            document.getElementById('addBuyersPage').classList.remove('hidden');
        }

        function showBulkUploadBuyers() {
            document.getElementById('addBuyersContainer').classList.add('hidden');
            document.getElementById('bulkUploadBuyersContainer').classList.remove('hidden');
        }

        function backToAddBuyers() {
            document.getElementById('addBuyersPage').classList.add('hidden');
            document.getElementById('addBuyersContainer').classList.remove('hidden');
        }
