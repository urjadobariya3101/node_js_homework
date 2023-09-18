const { bannerService } = require("../services");

/** Create Banner */
const createBanner = async (req, res) => {
  try {
    const reqBody = req.body;

    if (req.file) {
      reqBody.banner_image = req.file.filename;
    } else {
      throw new Error("Banner image is required!");
    }

    const createdBanner = await bannerService.createBanner(reqBody);

    res.status(200).json({
      success: true,
      message: "Banner create successfully!",
      data: createdBanner,
    });
  } catch (error) {
    res.status(error?.statusCode || 400).json({
      success: false,
      message:
        error?.message || "Something went wrong, please try again or later!",
    });
  }
};

/** Get Banner details */
// const getDetails = async (req, res) => {
//   try {
//     const productId = req.params.productId;
//     const productExists = await productService.getProductById(productId);
//     if (!productExists) {
//       throw new Error("Product not found!");
//     }

//     res.status(200).json({
//       success: true,
//       message: "Product details get successfully!",
//       data: productExists,
//     });
//   } catch (error) {
//     res.status(error?.statusCode || 400).json({
//       success: false,
//       message:
//         error?.message || "Something went wrong, please try again or later!",
//     });
//   }
// };

/** Get Banner list */
// const getBannerList = async (req, res) => {
//   try {
//     const getList = await bannerService.getList();

//     res.status(200).json({
//       success: true,
//       data: getList,
//     });
//   } catch (error) {
//     res.status(error?.statusCode || 400).json({
//       success: false,
//       message:
//         error?.message || "Something went wrong, please try again or later!",
//     });
//   }
// };

/** Update Banner details */
// const updateProduct = async (req, res) => {
//   try {
//     const reqBody = req.body;
//     const productId = req.params.productId;
//     const productExists = await productService.getProductById(productId);
//     if (!productExists) {
//       throw new Error("Product not found!");
//     }

//     if (req.file) {
//       reqBody.product_image = req.file.filename;
//     }

//     const updatedProduct = await productService.updateProduct(
//       productId,
//       reqBody
//     );
//     if (updatedProduct) {
//       if (req.file) {
//         const filePath = `./public/product_images/${productExists.product_image}`;
//         if (fs.existsSync(filePath)) {
//           fs.unlinkSync(filePath);
//         }
//       }
//     } else {
//       throw new Error("Something went wrong, please try again or later!");
//     }

//     res.status(200).json({
//       success: true,
//       message: "Product details update successfully!",
//       data: updatedProduct,
//     });
//   } catch (error) {
//     res.status(error?.statusCode || 400).json({
//       success: false,
//       message:
//         error?.message || "Something went wrong, please try again or later!",
//     });
//   }
// };

/** Manage Banner status */
// const manageProductStatus = async (req, res) => {
//   try {
//     const productId = req.params.productId;
//     const manageStatus = await productService.manageProductStatus(productId);

//     let resMessage = manageStatus.is_active
//       ? "Product can enable to sale."
//       : "Product can not enable to sale";

//     res.status(200).json({
//       success: true,
//       message: resMessage,
//       data: manageStatus,
//     });
//   } catch (error) {
//     res.status(error?.statusCode || 400).json({
//       success: false,
//       message:
//         error?.message || "Something went wrong, please try again or later!",
//     });
//   }
// };

/** Delete Banner */
// const deleteProduct = async (req, res) => {
//   try {
//     const productId = req.params.productId;
//     const productExists = await productService.getProductById(productId);
//     if (!productExists) {
//       throw new Error("Product not found!");
//     }

//     const deletedProduct = await productService.deleteProduct(productId);
//     if (deletedProduct) {
//       const filePath = `./public/product_images/${productExists.product_image}`;
//       if (fs.existsSync(filePath)) {
//         fs.unlinkSync(filePath);
//       }
//     } else {
//       throw new Error("Something went wrong, please try again or later!");
//     }

//     res.status(200).json({
//       success: true,
//       message: "Product delete successfully!",
//       data: deletedProduct,
//     });
//   } catch (error) {
//     res.status(error?.statusCode || 400).json({
//       success: false,
//       message:
//         error?.message || "Something went wrong, please try again or later!",
//     });
//   }
// };

module.exports = {
  createBanner,
  // getDetails,
  // getBannerList,
  // updateProduct,
  // manageProductStatus,
  // deleteProduct,
};