// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../core/libs/gl-matrix-2/gl-matrix ../../../../geometry/support/aaBoundingBox ./featureExpressionInfoUtils ./Graphics3DGraphicElevationContext ./graphicUtils ../../webgl-engine/Stage".split(" "),function(m,E,F,y,z,n,g,A,B,C,f){m=function(){function c(a,b,g,f,e,h,l,d){this.type="object3d";this._addedToStage=!1;this.alignedTerrainElevation=0;this.needsElevationUpdates=
!1;this.graphics3DSymbolLayer=a;this.uniqueMaterials=f;this.uniqueGeometries=g;this.uniqueTextures=e;this.stageObject=b;this.elevationAligner=h;this.elevationContext=new B(l);this.stageLayer=this.stage=null;this._visible=!1;this.visibilityMode=null!=d?d:c.VisibilityModes.HIDE_FACERANGE}c.prototype.initialize=function(a,b){this.stageLayer=a;this.stage=b;if(this.uniqueMaterials)for(a=0;a<this.uniqueMaterials.length;a++)b.add(f.ModelContentType.MATERIAL,this.uniqueMaterials[a]);if(this.uniqueGeometries)for(a=
0;a<this.uniqueGeometries.length;a++)b.add(f.ModelContentType.GEOMETRY,this.uniqueGeometries[a]);if(this.uniqueTextures)for(a=0;a<this.uniqueTextures.length;a++)b.add(f.ModelContentType.TEXTURE,this.uniqueTextures[a]);b.add(f.ModelContentType.OBJECT,this.stageObject)};c.prototype.setVisibility=function(a){if(null!=this.stage)return this._visible!==a?((this._visible=a)?this._addedToStage?this.stageObject.unhideAllComponents():(this.stageLayer.addObject(this.stageObject),this._addedToStage=!0):this.visibilityMode===
c.VisibilityModes.HIDE_FACERANGE?this.stageObject.hideAllComponents():(this.stageLayer.removeObject(this.stageObject),this._addedToStage=!1),a=this.stage.view.getEdgeView(),a.hasObject(this.stageObject)&&a.updateObjectVisibility(this.stageObject,this._visible),!0):!1};Object.defineProperty(c.prototype,"visible",{get:function(){return this._visible},enumerable:!0,configurable:!0});c.prototype.destroy=function(){var a=this.stage;if(this.stageLayer){if(this.uniqueMaterials)for(var b=0;b<this.uniqueMaterials.length;b++)a.remove(f.ModelContentType.MATERIAL,
this.uniqueMaterials[b].id);if(this.uniqueGeometries)for(b=0;b<this.uniqueGeometries.length;b++)a.remove(f.ModelContentType.GEOMETRY,this.uniqueGeometries[b].id);if(this.uniqueTextures)for(b=0;b<this.uniqueTextures.length;b++)a.remove(f.ModelContentType.TEXTURE,this.uniqueTextures[b].id)}a.remove(f.ModelContentType.OBJECT,this.stageObject.id);this._addedToStage&&(this.stageLayer.removeObject(this.stageObject),this._addedToStage=!1);a=this.stage.view.getEdgeView();a.hasObject(this.stageObject)&&a.removeObject(this.stageObject);
this._visible=!1;this.stage=this.stageLayer=null};c.prototype.alignWithElevation=function(a,b,c){this.elevationAligner&&(A.setContextFeature(this.elevationContext.featureExpressionInfoContext,c),a=this.elevationAligner(this,this.elevationContext,a,b),null!=a&&(this.alignedTerrainElevation=a))};c.prototype.getBSRadius=function(){return this.stageObject.getBSRadius()};c.prototype.getCenterObjectSpace=function(a){void 0===a&&(a=n.vec3f64.create());return n.vec3.copy(a,this.stageObject.getCenter(!0))};
c.prototype.getBoundingBoxObjectSpace=function(a){void 0===a&&(a=g.create());var b=this.stageObject;a||(a=g.create());g.setMin(a,b.getBBMin(!0));g.setMax(a,b.getBBMax(!0));return a};c.prototype.getProjectedBoundingBox=function(a,b,c,f){return z(this,void 0,void 0,function(){var e,m,t,d,u,v,k,w,p,x;return y(this,function(q){switch(q.label){case 0:e=this.getBoundingBoxObjectSpace(f);m=D;t=g.isPoint(e)?1:m.length;for(d=0;d<t;d++)u=m[d],h[0]=e[u[0]],h[1]=e[u[1]],h[2]=e[u[2]],n.vec3.transformMat4(h,h,
this.stageObject.objectTransformation),l[3*d+0]=h[0],l[3*d+1]=h[1],l[3*d+2]=h[2];if(!a(l,0,t))return[2,null];g.empty(e);v=null;this.calculateRelativeScreenBounds&&(v=this.calculateRelativeScreenBounds());for(d=0;d<3*t;d+=3){for(k=0;3>k;k++)e[k]=Math.min(e[k],l[d+k]),e[k+3]=Math.max(e[k+3],l[d+k]);v&&c.push({location:l.slice(d,d+3),screenSpaceBoundingRect:v})}if(!b||!b.service||"absolute-height"===this.elevationContext.mode)return[3,5];g.center(e,r);w="relative-to-scene"===this.elevationContext.mode?
"scene":"ground";p=void 0;if(!b.useViewElevation)return[3,1];p=b.service.getElevation(r[0],r[1],w);return[3,4];case 1:return q.trys.push([1,3,,4]),x=C.demResolutionForBoundingBox(e,b),[4,b.service.queryElevation(r[0],r[1],x,w)];case 2:return p=q.sent(),[3,4];case 3:return q.sent(),p=null,[3,4];case 4:g.offset(e,0,0,-this.alignedTerrainElevation+p),q.label=5;case 5:return[2,e]}})})};c.prototype.addHighlight=function(a,b){b=this.stageObject.highlightAllComponents(b);a.addObject(this.stageObject,b)};
c.prototype.removeHighlight=function(a){a.removeObject(this.stageObject)};return c}();(function(c){c=c.VisibilityModes||(c.VisibilityModes={});c[c.REMOVE_OBJECT=0]="REMOVE_OBJECT";c[c.HIDE_FACERANGE=1]="HIDE_FACERANGE"})(m||(m={}));var l=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],h=n.vec3f64.create(),r=n.vec3f64.create(),D=[[0,1,2],[3,1,2],[0,4,2],[3,4,2],[0,1,5],[3,1,5],[0,4,5],[3,4,5]];return m});