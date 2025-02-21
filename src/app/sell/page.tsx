"use client";

import React, { useState } from "react";
import Image from "next/image";

interface NFTFormData {
  image: File | null;
  title: string;
  description: string;
  price: string;
}

export default function SellNFTPage() {
  const [formData, setFormData] = useState<NFTFormData>({
    image: null,
    title: "",
    description: "",
    price: "",
  });
  const [previewUrl, setPreviewUrl] = useState<string>("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <div className="max-w-[1248px] mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8">Sell your NFT</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  Upload Image *
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-700">
                  <div className="space-y-2 text-center">
                    <div className="flex text-sm text-secondary">
                      <label
                        htmlFor="image-upload"
                        className="relative cursor-pointer rounded-md font-medium text-primary hover:text-primary/80"
                      >
                        <span>Upload a file</span>
                        <input
                          id="image-upload"
                          name="image"
                          type="file"
                          accept="image/*"
                          className="sr-only"
                          onChange={handleImageChange}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-secondary">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              {/* Title */}
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-secondary mb-2"
                >
                  Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-secondary mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Price */}
              <div>
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-secondary mb-2"
                >
                  Price (ETH) *
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  step="0.001"
                  min="0"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/80 transition-colors"
              >
                Create NFT Listing
              </button>
            </form>
          </div>

          {/* Preview Section */}
          <div className="lg:sticky lg:top-24 space-y-6">
            <h2 className="text-2xl font-bold text-primary">Preview</h2>
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
              <div className="aspect-square relative rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-900 mb-4">
                {previewUrl ? (
                  <Image
                    src={previewUrl}
                    alt="NFT Preview"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-secondary">
                    <span>No image uploaded</span>
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-primary">
                  {formData.title || "Untitled NFT"}
                </h3>
                <p className="text-secondary">
                  {formData.description || "No description provided"}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary">Price</span>
                  <span className="font-bold text-primary">
                    {formData.price ? `${formData.price} ETH` : "--"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
